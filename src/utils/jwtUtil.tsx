import axios, {
    InternalAxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    AxiosHeaders,
} from "axios";
import { getCookie, setCookie, removeCookie } from "./cookieUtil";
import { refreshToken as refreshTokenApi } from "../api/authApi";

// axios 인스턴스 생성
const jwtAxios = axios.create();

interface UserCookie {
    accessToken: string;
    refreshToken: string;
}

interface ErrorResponse {
    error?: string;
    message?: string;
    [key: string]: unknown;
}

// 로그아웃 처리 함수
const handleLogout = (
    message: string = "로그인 세션이 만료되었습니다. 다시 로그인해주세요."
) => {
    // 쿠키에서 사용자 정보 삭제
    removeCookie("user");

    // 로컬 스토리지나 세션 스토리지도 필요시 정리
    localStorage.removeItem("user");
    sessionStorage.clear();

    // 사용자에게 알림
    alert(message);

    // 로그인 페이지로 리다이렉트
    window.location.href = "/map";

    // 또는 React Router를 사용하는 경우:
    // navigate("/login", { replace: true });
};

const beforeReq = async (
    config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
    const userInfo = getCookie<UserCookie>("user");

    if (!userInfo) {
        console.error("토큰 정보를 찾을 수 없습니다. 로그인 필요");
        // handleLogout("로그인이 필요합니다.");
        return Promise.reject({
            response: {
                data: {
                    error: "REQUIRE_LOGIN",
                },
            },
        });
    }

    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${userInfo.accessToken}`;

    return config;
};

const requestFail = (err: AxiosError): Promise<never> => {
    console.error(err);
    return Promise.reject(err);
};

const beforeRes = async (
    res: AxiosResponse<ErrorResponse>
): Promise<AxiosResponse> => {
    return res;
};

const responseFail = async (err: AxiosError<ErrorResponse>): Promise<never> => {
    const res = err.response;
    const originalRequest = err.config;

    // 모든 401 응답에 대해 처리 (메시지 조건 제거)
    if (res?.status === 401) {
        // 재시도 했으면 무한루프 방지
        if (
            (
                originalRequest as InternalAxiosRequestConfig & {
                    _retry?: boolean;
                }
            )?._retry
        ) {
            // 토큰 갱신도 실패했으므로 완전한 로그아웃 처리
            handleLogout("로그인 세션이 만료되었습니다. 다시 로그인해주세요.");
            return Promise.reject("REQUIRE_LOGIN");
        }

        const user = getCookie<UserCookie>("user");
        if (!user) {
            handleLogout("로그인 정보가 만료되었습니다.");
            return Promise.reject("REQUIRE_LOGIN");
        }

        try {
            const result = await refreshTokenApi();

            if (!result.accessToken) {
                handleLogout("로그인 정보가 만료되었습니다.");
                return Promise.reject("REQUIRE_LOGIN");
            }

            user.accessToken = result.accessToken;
            if (result.refreshToken) {
                user.refreshToken = result.refreshToken;
            }
            setCookie("user", JSON.stringify(user));

            if (!originalRequest) {
                alert("요청 정보를 찾을 수 없습니다.");
                return Promise.reject("NO_ORIGINAL_REQUEST");
            }

            // 재시도 플래그 설정
            (
                originalRequest as InternalAxiosRequestConfig & {
                    _retry?: boolean;
                }
            )._retry = true;

            const headers = new AxiosHeaders(originalRequest.headers);
            headers.set("Authorization", `Bearer ${result.accessToken}`);
            originalRequest.headers = headers;

            return axios(originalRequest);
        } catch (refreshError) {
            console.error(refreshError);
            // 토큰 갱신 실패 시 완전한 로그아웃 처리
            handleLogout("로그인 세션이 만료되었습니다. 다시 로그인해주세요.");
            return Promise.reject(refreshError);
        }
    }

    console.error("응답 처리 중 오류가 발생했습니다:", err);
    return Promise.reject(err);
};

jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
