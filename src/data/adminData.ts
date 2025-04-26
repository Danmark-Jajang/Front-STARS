// src/data/adminData.ts

export interface TouristSpot {
    name: string;
    code: string;
    status: string;
}

export interface WeatherCard {
    date: string;
    hour: string;
    status: string;
    icon: string;
    temperature: string;
    dust: {
        fineDust: string;
        ultraFineDust: string;
    };
}

export interface TouristInfo {
    spotName: string;
    spotCode: string;
    timestamp: string;
    participantCount: string;
}

export interface PopulationData {
    area_nm: string; // 지역명
    area_cd: string; // 지역 코드
    area_congest_lvl: string; // 지역 혼잡도 수준
    area_congest_msg: string; // 지역 혼잡도 메시지
    area_ppltn_min: number; // 지역 최소 인구
    area_ppltn_max: number; // 지역 최대 인구
    male_ppltn_rate: number; // 남성 인구 비율
    female_ppltn_rate: number; // 여성 인구 비율
    ppltn_rate_0: number; // 0-9세 인구 비율
    ppltn_rate_10: number; // 10-19세 인구 비율
    ppltn_rate_20: number; // 20-29세 인구 비율
    ppltn_rate_30: number; // 30-39세 인구 비율
    ppltn_rate_40: number; // 40-49세 인구 비율
    ppltn_rate_50: number; // 50-59세 인구 비율
    ppltn_rate_60: number; // 60-69세 인구 비율
    ppltn_rate_70: number; // 70세 이상 인구 비율
    resnt_ppltn_rate: number; // 거주 인구 비율
    non_resnt_ppltn_rate: number; // 비거주 인구 비율
    replace_yn: string; // 대체 여부
    ppltn_time: string; // 인구 데이터 시간
    fcst_yn: string; // 예측 여부
    fcst_ppltn_wrapper: ForecastPopulationWrapper; // 예측 인구 데이터 래퍼
}

// 전체 데이터 구조 인터페이스
export interface PopulationResponse {
    ppltn_data: PopulationData; // 인구 데이터
}

export interface ForecastPopulationWrapper {
    fcst_ppltn: ForecastPopulation[]; // 예측 인구 데이터 배열
}

export interface ForecastPopulation {
    fcst_time: string; // 예측 시간
    fcst_congest_lvl: string; // 예측 혼잡도 수준
    fcst_ppltn_min: number; // 예측 최소 인구
    fcst_ppltn_max: number; // 예측 최대 인구
}

export interface Data {
    name: string;
    value: number;
    fill: string;
}

export const touristSpots: TouristSpot[] = [
    { name: "여의도 한강공원", code: "POI072", status: "붐빔" },
    { name: "국회의사당", code: "POI073", status: "붐빔" },
    { name: "63스퀘어", code: "POI074", status: "매우 붐빔" },
    { name: "여의도 봄꽃축제거리", code: "POI075", status: "매우 붐빔" },
    { name: "IFC몰", code: "POI076", status: "붐빔" },

    // 강남 지역
    { name: "강남역", code: "POI001", status: "매우 붐빔" },
    { name: "코엑스", code: "POI002", status: "붐빔" },
    { name: "삼성역", code: "POI003", status: "붐빔" },
    { name: "압구정 로데오거리", code: "POI004", status: "붐빔" },
    { name: "청담동 명품거리", code: "POI005", status: "매우 붐빔" },

    // 명동/종로 지역
    { name: "명동 쇼핑거리", code: "POI011", status: "매우 붐빔" },
    { name: "경복궁", code: "POI012", status: "붐빔" },
    { name: "창덕궁", code: "POI013", status: "붐빔" },
    { name: "광화문 광장", code: "POI014", status: "붐빔" },
    { name: "인사동", code: "POI015", status: "매우 붐빔" },

    // 홍대/이태원 지역
    { name: "홍대 걷고싶은거리", code: "POI021", status: "매우 붐빔" },
    { name: "연남동", code: "POI022", status: "붐빔" },
    { name: "경의선 숲길", code: "POI023", status: "붐빔" },
    { name: "이태원 거리", code: "POI024", status: "붐빔" },
    { name: "한강진역", code: "POI025", status: "매우 붐빔" },

    // 한강 주변
    { name: "반포 한강공원", code: "POI031", status: "붐빔" },
    { name: "뚝섬 한강공원", code: "POI032", status: "매우 붐빔" },
    { name: "망원 한강공원", code: "POI033", status: "붐빔" },
    { name: "잠실 한강공원", code: "POI034", status: "매우 붐빔" },
    { name: "난지 한강공원", code: "POI035", status: "붐빔" },

    // 북한산/도봉산 지역
    { name: "북한산국립공원", code: "POI041", status: "매우 붐빔" },
    { name: "도봉산국립공원", code: "POI042", status: "붐빔" },
    { name: "북한산 둘레길", code: "POI043", status: "매우 붐빔" },

    // 서울 숲/동대문 지역
    { name: "서울숲공원", code: "POI051", status: "붐빔" },
    { name: "동대문디자인플라자", code: "POI052", status: "붐빔" },
    { name: "창신동 봉제골목", code: "POI053", status: "매우 붐빔" },
    { name: "청계천", code: "POI054", status: "붐빔" },
    { name: "동대문 쇼핑타운", code: "POI055", status: "매우 붐빔" },

    // 잠실/송파 지역
    { name: "롯데월드", code: "POI061", status: "매우 붐빔" },
    { name: "석촌호수", code: "POI062", status: "붐빔" },
    { name: "올림픽공원", code: "POI063", status: "매우 붐빔" },
    { name: "방이동 먹자골목", code: "POI064", status: "붐빔" },
    { name: "가락시장", code: "POI065", status: "매우 붐빔" },

    // 기타 지역
    { name: "남산타워", code: "POI081", status: "매우 붐빔" },
    { name: "서울로7017", code: "POI082", status: "붐빔" },
    { name: "덕수궁", code: "POI083", status: "매우 붐빔" },
    { name: "창경궁", code: "POI084", status: "붐빔" },
    { name: "노을공원", code: "POI085", status: "매우 붐빔" },
];

export const weatherData: WeatherCard[] = [
    {
        date: "04-22",
        hour: "오늘",
        status: "맑음",
        icon: "☀️",
        temperature: "21°C",
        dust: {
            fineDust: "매우나쁨",
            ultraFineDust: "나쁨",
        },
    },
    {
        date: "04-23",
        hour: "내일",
        status: "구름조금",
        icon: "🌤️",
        temperature: "19°C",
        dust: {
            fineDust: "보통",
            ultraFineDust: "좋음",
        },
    },
    {
        date: "04-24",
        hour: "2일후",
        status: "비",
        icon: "🌧️",
        temperature: "18°C",
        dust: {
            fineDust: "좋음",
            ultraFineDust: "좋음",
        },
    },
    {
        date: "04-25",
        hour: "3일후",
        status: "흐림",
        icon: "☁️",
        temperature: "20°C",
        dust: {
            fineDust: "나쁨",
            ultraFineDust: "보통",
        },
    },
    {
        date: "04-26",
        hour: "4일후",
        status: "맑음",
        icon: "☀️",
        temperature: "22°C",
        dust: {
            fineDust: "보통",
            ultraFineDust: "좋음",
        },
    },
];

export const touristInfo: TouristInfo[] = [
    {
        spotName: "광화문/덕수궁",
        spotCode: "POI012",
        timestamp: "2025-04-22 10:05",
        participantCount: "보통",
    },
    {
        spotName: "명동 쇼핑거리",
        spotCode: "POI011",
        timestamp: "2025-04-22 10:15",
        participantCount: "붐빔",
    },
    {
        spotName: "롯데월드",
        spotCode: "POI061",
        timestamp: "2025-04-22 10:30",
        participantCount: "붐빔",
    },
    {
        spotName: "인사동",
        spotCode: "POI015",
        timestamp: "2025-04-22 10:45",
        participantCount: "약간 붐빔",
    },
    {
        spotName: "코엑스",
        spotCode: "POI002",
        timestamp: "2025-04-22 11:00",
        participantCount: "보통",
    },
    {
        spotName: "홍대 걷고싶은거리",
        spotCode: "POI021",
        timestamp: "2025-04-22 11:15",
        participantCount: "붐빔",
    },
    {
        spotName: "여의도 한강공원",
        spotCode: "POI072",
        timestamp: "2025-04-22 11:30",
        participantCount: "약간 붐빔",
    },
    {
        spotName: "북한산국립공원",
        spotCode: "POI041",
        timestamp: "2025-04-22 11:45",
        participantCount: "원활",
    },
    {
        spotName: "반포 한강공원",
        spotCode: "POI031",
        timestamp: "2025-04-22 12:00",
        participantCount: "약간 붐빔",
    },
    {
        spotName: "청계천",
        spotCode: "POI054",
        timestamp: "2025-04-22 12:15",
        participantCount: "원활",
    },
    {
        spotName: "강남역",
        spotCode: "POI001",
        timestamp: "2025-04-22 12:30",
        participantCount: "붐빔",
    },
    {
        spotName: "동대문디자인플라자",
        spotCode: "POI052",
        timestamp: "2025-04-22 12:45",
        participantCount: "약간 붐빔",
    },
    {
        spotName: "남산타워",
        spotCode: "POI081",
        timestamp: "2025-04-22 13:00",
        participantCount: "약간 붐빔",
    },
    {
        spotName: "이태원 거리",
        spotCode: "POI024",
        timestamp: "2025-04-22 13:15",
        participantCount: "보통",
    },
    {
        spotName: "올림픽공원",
        spotCode: "POI063",
        timestamp: "2025-04-22 13:30",
        participantCount: "원활",
    },
    {
        spotName: "63스퀘어",
        spotCode: "POI074",
        timestamp: "2025-04-22 13:45",
        participantCount: "약간 붐빔",
    },
    {
        spotName: "경복궁",
        spotCode: "POI012",
        timestamp: "2025-04-22 14:00",
        participantCount: "붐빔",
    },
    {
        spotName: "석촌호수",
        spotCode: "POI062",
        timestamp: "2025-04-22 14:15",
        participantCount: "보통",
    },
    {
        spotName: "서울숲공원",
        spotCode: "POI051",
        timestamp: "2025-04-22 14:30",
        participantCount: "원활",
    },
    {
        spotName: "청담동 명품거리",
        spotCode: "POI005",
        timestamp: "2025-04-22 14:45",
        participantCount: "약간 붐빔",
    },
];

export const dummyData: PopulationResponse = {
    ppltn_data: {
        area_nm: "광화문·덕수궁",
        area_cd: "POI009",
        area_congest_lvl: "보통",
        area_congest_msg:
            "사람이 몰려있을 수 있지만 크게 붐비지는 않아요. 도보 이동에 큰 제약이 없어요.",
        area_ppltn_min: 40000,
        area_ppltn_max: 43000,
        male_ppltn_rate: 48.1,
        female_ppltn_rate: 51.9,
        ppltn_rate_0: 0.1,
        ppltn_rate_10: 2.5,
        ppltn_rate_20: 16.4,
        ppltn_rate_30: 24.1,
        ppltn_rate_40: 26.5,
        ppltn_rate_50: 18.8,
        ppltn_rate_60: 8.0,
        ppltn_rate_70: 3.6,
        resnt_ppltn_rate: 29.6,
        non_resnt_ppltn_rate: 70.4,
        replace_yn: "N",
        ppltn_time: "2025-04-18 16:05",
        fcst_yn: "Y",
        fcst_ppltn_wrapper: {
            fcst_ppltn: [
                {
                    fcst_time: "2025-04-18 00:00",
                    fcst_congest_lvl: "원활",
                    fcst_ppltn_min: 18000,
                    fcst_ppltn_max: 20000,
                },
                {
                    fcst_time: "2025-04-18 01:00",
                    fcst_congest_lvl: "원활",
                    fcst_ppltn_min: 14000,
                    fcst_ppltn_max: 16000,
                },
                {
                    fcst_time: "2025-04-18 02:00",
                    fcst_congest_lvl: "원활",
                    fcst_ppltn_min: 10000,
                    fcst_ppltn_max: 12000,
                },
                {
                    fcst_time: "2025-04-18 03:00",
                    fcst_congest_lvl: "원활",
                    fcst_ppltn_min: 8000,
                    fcst_ppltn_max: 10000,
                },
                {
                    fcst_time: "2025-04-18 04:00",
                    fcst_congest_lvl: "원활",
                    fcst_ppltn_min: 6000,
                    fcst_ppltn_max: 8000,
                },
                {
                    fcst_time: "2025-04-18 05:00",
                    fcst_congest_lvl: "원활",
                    fcst_ppltn_min: 10000,
                    fcst_ppltn_max: 12000,
                },
                {
                    fcst_time: "2025-04-18 06:00",
                    fcst_congest_lvl: "원활",
                    fcst_ppltn_min: 15000,
                    fcst_ppltn_max: 17000,
                },
                {
                    fcst_time: "2025-04-18 07:00",
                    fcst_congest_lvl: "보통",
                    fcst_ppltn_min: 22000,
                    fcst_ppltn_max: 24000,
                },
                {
                    fcst_time: "2025-04-18 08:00",
                    fcst_congest_lvl: "보통",
                    fcst_ppltn_min: 28000,
                    fcst_ppltn_max: 30000,
                },
                {
                    fcst_time: "2025-04-18 09:00",
                    fcst_congest_lvl: "약간 붐빔",
                    fcst_ppltn_min: 32000,
                    fcst_ppltn_max: 34000,
                },
                {
                    fcst_time: "2025-04-18 10:00",
                    fcst_congest_lvl: "약간 붐빔",
                    fcst_ppltn_min: 36000,
                    fcst_ppltn_max: 38000,
                },
                {
                    fcst_time: "2025-04-18 11:00",
                    fcst_congest_lvl: "붐빔",
                    fcst_ppltn_min: 40000,
                    fcst_ppltn_max: 42000,
                },
                {
                    fcst_time: "2025-04-18 12:00",
                    fcst_congest_lvl: "붐빔",
                    fcst_ppltn_min: 44000,
                    fcst_ppltn_max: 46000,
                },
                {
                    fcst_time: "2025-04-18 13:00",
                    fcst_congest_lvl: "붐빔",
                    fcst_ppltn_min: 46000,
                    fcst_ppltn_max: 48000,
                },
                {
                    fcst_time: "2025-04-18 14:00",
                    fcst_congest_lvl: "붐빔",
                    fcst_ppltn_min: 45000,
                    fcst_ppltn_max: 47000,
                },
                {
                    fcst_time: "2025-04-18 15:00",
                    fcst_congest_lvl: "약간 붐빔",
                    fcst_ppltn_min: 42000,
                    fcst_ppltn_max: 44000,
                },
                {
                    fcst_time: "2025-04-18 16:00",
                    fcst_congest_lvl: "약간 붐빔",
                    fcst_ppltn_min: 40000,
                    fcst_ppltn_max: 42000,
                },
                {
                    fcst_time: "2025-04-18 17:00",
                    fcst_congest_lvl: "약간 붐빔",
                    fcst_ppltn_min: 38000,
                    fcst_ppltn_max: 40000,
                },
                {
                    fcst_time: "2025-04-18 18:00",
                    fcst_congest_lvl: "약간 붐빔",
                    fcst_ppltn_min: 36000,
                    fcst_ppltn_max: 38000,
                },
                {
                    fcst_time: "2025-04-18 19:00",
                    fcst_congest_lvl: "약간 붐빔",
                    fcst_ppltn_min: 36000,
                    fcst_ppltn_max: 38000,
                },
                {
                    fcst_time: "2025-04-18 20:00",
                    fcst_congest_lvl: "보통",
                    fcst_ppltn_min: 34000,
                    fcst_ppltn_max: 36000,
                },
                {
                    fcst_time: "2025-04-18 21:00",
                    fcst_congest_lvl: "보통",
                    fcst_ppltn_min: 32000,
                    fcst_ppltn_max: 34000,
                },
                {
                    fcst_time: "2025-04-18 22:00",
                    fcst_congest_lvl: "원활",
                    fcst_ppltn_min: 28000,
                    fcst_ppltn_max: 30000,
                },
                {
                    fcst_time: "2025-04-18 23:00",
                    fcst_congest_lvl: "원활",
                    fcst_ppltn_min: 24000,
                    fcst_ppltn_max: 26000,
                },
            ],
        },
    },
};
