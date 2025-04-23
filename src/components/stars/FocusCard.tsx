// src/components/FocusCard.tsx

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CountUp } from "countup.js";
import { places } from "../../data/placesData";

interface FocusCardProps {
    placeId: keyof typeof places;
    show: boolean;
    onClose: () => void;
    onDetail: () => void;
    // isFavorite: boolean;
    // 즐겨찾기 기능을 사용하지 않으니 임시로 주석처리
}

/**
 * 포커스 카드 컴포넌트
 * - 관광지 클릭 시 상세 요약 정보 + CountUp 방문자 수 표시
 * - 배경 블러, 행사, 키워드, "자세히 보기" 버튼 포함
 */
const FocusCard: React.FC<FocusCardProps> = ({
    placeId,
    show,
    onClose,
    onDetail,
}) => {
    const place = places[placeId];
    const visitorCountRef = useRef<HTMLSpanElement | null>(null);
    const [isFavorite, setIsFavorite] = useState(false);

    // CountUp 실행
    useEffect(() => {
        // ✅ show가 true일 때만 실행
        if (!show || !visitorCountRef.current || !place) return;

        const countUp = new CountUp(
            visitorCountRef.current,
            place.todayVisitors,
            {
                duration: 2,
                useEasing: true,
                separator: ",",
            }
        );

        if (!countUp.error) {
            countUp.start();
        } else {
            console.error(countUp.error);
        }
    }, [placeId, show]);

    return (
        <motion.div
            className={`absolute inset-0 z-20 flex justify-center items-center transition-opacity duration-500 ${
                show
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}
            initial={false}
            animate={{ opacity: show ? 1 : 0 }}
        >
            {/* 배경 블러 */}
            <div
                className="absolute inset-0 z-10 bg-white/30 backdrop-blur-sm"
                onClick={onClose}
            />
            {/* 안내 메시지 */}
            <motion.div
                className="fixed inline-flex z-20 items-center p-4 space-x-4 bg-white text-green-500 rounded-2xl shadow-xl bottom-10"
                role="alert"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <div className="text-sm font-bold text-gray-500">
                    돌아가시려면 화면 밖을 클릭해 주세요.
                </div>
            </motion.div>
            {/* 카드 본문 */}
            <div
                className="relative z-20 flex flex-col items-center gap-6 max-w-5xl w-full px-6"
                onClick={(e) => e.stopPropagation()}
            >
                {/* 방문자 수 카드 */}
                <motion.div
                    className="bg-white rounded-2xl shadow-lg p-4 w-2/5"
                    whileHover={{ y: -8 }}
                >
                    <div className="flex items-center justify-between mb-2">
                        {/* 즐겨찾기 토글 버튼 */}
                        <h3 className="text-xl text-gray-500 mb-1">
                            {place.name} 방문자 수
                        </h3>
                        <button
                            onClick={() => setIsFavorite((prev) => !prev)}
                            className={`bg-white rounded-full shadow-md p-2 hover:border-yellow-50 focus:outline-none focus:ring-0`}
                        >
                            {isFavorite ? (
                                // Solid Star (채워진 별)
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            ) : (
                                // Outline Star (비어있는 별)
                                <svg
                                    className="w-4 h-4 text-gray-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <p className="text-5xl font-bold text-gray-900">
                        <span ref={visitorCountRef}></span>명
                    </p>
                </motion.div>

                {/* 행사 & 키워드 & 자세히 보기 */}
                <div className="flex flex-wrap justify-center items-start gap-4 w-full">
                    {/* 행사 */}
                    <motion.div
                        className="bg-red-500 text-white rounded-2xl shadow-lg p-4"
                        whileHover={{ y: -8 }}
                    >
                        <h3 className="text-xl font-medium mb-1">행사</h3>
                        <ul className="text-2xl space-y-1">
                            {place.events.map((e, idx) => (
                                <li key={idx}>{e}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* 키워드 */}
                    <motion.div
                        className="bg-blue-600 text-white w-1/5 rounded-2xl shadow-lg p-4"
                        whileHover={{ y: -8 }}
                    >
                        <h3 className="text-xl font-medium mb-1">
                            관심 키워드
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {place.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-white/20 text-white text-l px-3 py-1 rounded-full"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
                {/* 자세히 보기 버튼 */}
                <motion.div
                    onClick={onDetail}
                    className="cursor-pointer bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center text-4xl font-bold text-indigo-600 hover:bg-indigo-600 hover:text-white"
                    whileHover={{ y: -8 }}
                >
                    자세히 보기 ↓
                </motion.div>
            </div>
        </motion.div>
    );
};

export default FocusCard;
