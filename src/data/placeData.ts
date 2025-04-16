// types 정의
type DayStat = {
    day: string;
    population: number;
};

type Place = {
    name: string;
    address: string;
    image: string;
    todayVisitors: number;
    weeklyStats: DayStat[];
    events: string[];
    tags: string[];
};

// 전체 place 모음 타입
type Places = {
    [key: string]: Place;
};

// 데이터
export const places: Places = {
    seoulPlaza: {
        name: "서울시청 광장",
        address: "중구 세종대로 110",
        image: "https://wimg.heraldcorp.com/content/default/2023/04/24/20230424000105_0.jpg",
        todayVisitors: 28900,
        weeklyStats: [
            {day: "Mon", population: 23000},
            {day: "Tue", population: 25500},
            {day: "Wed", population: 24200},
            {day: "Thu", population: 26700},
            {day: "Fri", population: 28900},
            {day: "Sat", population: 30000},
            {day: "Sun", population: 28000},
        ],
        events: ["🌸 봄꽃 페스티벌", "🎶 야외 음악회", "🎨 예술 전시회"],
        tags: ["전시", "공연", "건축", "야경", "힐링", "도보투어"],
    },
    lotteTower: {
        name: "롯데월드타워",
        address: "서울 송파구 올림픽로 300",
        image: "https://jmagazine.joins.com/_data/photo/2018/12/3717398825_hzfJC4PZ_1.jpg",
        todayVisitors: 45200,
        weeklyStats: [
            {day: "Mon", population: 31000},
            {day: "Tue", population: 32500},
            {day: "Wed", population: 34000},
            {day: "Thu", population: 36000},
            {day: "Fri", population: 42000},
            {day: "Sat", population: 47000},
            {day: "Sun", population: 45000},
        ],
        events: ["🎆 야경쇼", "🛍️ 쇼핑 페스타"],
        tags: ["야경", "전망대", "쇼핑", "데이트"],
    },
};
