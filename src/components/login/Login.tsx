import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Login() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [errorVisible, setErrorVisible] = useState(false);
    const [hasSwitched, setHasSwitched] = useState(false);

    const handleFormSwitch = () => {
        setErrorMessage("");
        setErrorVisible(false);
        setHasSwitched(true); // ✅ 폼 전환 애니메이션 플래그
        setIsRegistering((prev) => !prev);
    };

    const handleRegisterSuccess = () => {
        setIsRegistering(false);
        triggerError("회원가입이 완료되었습니다! 로그인 해주세요.");
    };

    const handleError = (message: string) => {
        triggerError(message);
    };

    const triggerError = (message: string) => {
        setErrorMessage(message);
        setErrorVisible(true);

        setTimeout(() => setErrorVisible(false), 1500);
        setTimeout(() => setErrorMessage(""), 2000);
    };

    return (
        <div className="relative min-h-screen w-full app-full-height bg-[#e0e5ec] flex items-center justify-center overflow-hidden">
            <div className="absolute bottom-0 left-0 w-1/2 h-full z-0 hidden md:flex items-end justify-start">
                <motion.img
                    src="/img/login-wave.PNG" // 첨부한 wave 이미지
                    alt="Wave Background"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="w-full h-auto object-contain"
                />
            </div>
            <div className="absolute -bottom-36 scale-125 left-0 h-full w-1/2 hidden md:flex items-end justify-center">
                <motion.img
                    src="/img/login-bg-1.png"
                    alt="Login Background"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.0, ease: "easeInOut" }}
                    className="max-w-[100%] max-h-[110%] object-contain"
                />
            </div>

            {/* 우측 로그인 박스 */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative z-10 w-[80%] sm:w-[85%] md:w-full max-w-md bg-[#e0e5ec]
    rounded-3xl shadow-[8px_8px_20px_rgba(163,177,198,0.5),-8px_-8px_20px_rgba(255,255,255,0.8)]
    px-4 py-6 sm:px-6 sm:py-8 md:p-8 mx-auto md:ml-[40%] md:mr-0"
            >
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    {isRegistering ? "회원가입" : "로그인"}
                </h2>

                {/* 에러 메시지 */}
                <div className="min-h-[24px] mb-4 text-center">
                    <AnimatePresence>
                        {errorMessage && (
                            <motion.div
                                key={errorMessage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: errorVisible ? 1 : 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.0 }}
                                className="text-red-500 text-sm"
                            >
                                {errorMessage}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={isRegistering ? "register" : "login"}
                        initial={hasSwitched ? { opacity: 0, y: 20 } : false} // ✅ 최초 렌더링 시 애니메이션 생략
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isRegistering ? (
                            <RegisterForm
                                onRegisterSuccess={handleRegisterSuccess}
                            />
                        ) : (
                            <LoginForm onError={handleError} />
                        )}
                    </motion.div>
                </AnimatePresence>

                <div className="mt-6 text-center">
                    <button
                        onClick={handleFormSwitch}
                        className="text-xs py-2 px-4 rounded-full text-gray-700 bg-[#e0e5ec] shadow-[inset_6px_6px_12px_rgba(163,177,198,0.4),inset_-6px_-6px_12px_rgba(255,255,255,0.9)] hover:shadow-[6px_6px_12px_rgba(163,177,198,0.4),-6px_-6px_12px_rgba(255,255,255,0.9)]"
                    >
                        {isRegistering
                            ? "이미 계정이 있으신가요? 로그인"
                            : "계정이 없으신가요? 회원가입"}
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
