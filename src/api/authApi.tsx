import axios from "axios";
import jwtAxios from "../utils/jwtUtil";
import API_SERVER_HOST from "./apiConfig";

const prefix = `${API_SERVER_HOST}/user/auth`;

type SignupUser = {
    user_id: string;
    password: string;
    nickname: string;
    birth_year: string;
    mbti: string;
    gender: string;
};
export const loginPost = async (loginParam: {
    user_id: string;
    password: string;
}) => {
    const header = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const res = await axios.post(
        `${prefix}/login`,
        JSON.stringify(loginParam),
        header
    );

    return res.data;
};
export const logoutPost = async () => {
    const header = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const res = await jwtAxios.post(`${prefix}/logout`, null, header);
    console.log("logout res", res);
    if (res.data && res.data.message) {
        console.log("logout message:", res.data.message);
    }
    return res.data;
};

export const signupUser = async (user: SignupUser) => {
    const header = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const res = await axios.post(
        `${prefix}/signup`,
        JSON.stringify(user),
        header
    );
    return res.data;
};

export const signoutUser = async (user_id: string) => {
    const header = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const res = await jwtAxios.delete(`${prefix}/signout/${user_id}`, header);

    return res.data;
};
