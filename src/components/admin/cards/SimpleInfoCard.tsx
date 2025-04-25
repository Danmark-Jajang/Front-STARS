import React from "react";

interface InfoProps {
    info: {
        area_name: string;
        area_code: string;
        area_congest_lvl: string;
    };
}

const SimpleInfoCard = ({ info }: InfoProps) => {
    return (
        // 카드 하나에서 둘로 나눔
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            <div className="bg-white p-2 rounded shadow">
                <h3 className="font-semibold text-sm text-black">지역명</h3>
                <p className="text-black text-center font-bold text-2xl">
                    {info.area_name}
                </p>
                <p className="text-gray-600 text-center text-sm">
                    {info.area_code}
                </p>
            </div>
            <div
                className={`${info.area_congest_lvl === "원활" ? "bg-green-500" : info.area_congest_lvl === "보통" ? "bg-yellow-400" : info.area_congest_lvl === "약간붐빔" ? "bg-orange-500" : "bg-red-500"} p-2 rounded shadow`}
            >
                <h3 className="font-semibold text-sm text-black">혼잡정도</h3>
                <p className="text-white text-center text-3xl font-bold">
                    {info.area_congest_lvl}
                </p>
            </div>
        </div>
    );
};

export default SimpleInfoCard;
