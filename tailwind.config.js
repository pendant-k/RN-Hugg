/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                "pretendard-thin": ["Pretendard-Thin", "sans-serif"],
                "pretendard-light": ["Pretendard-Light", "sans-serif"],
                "pretendard-extralight": [
                    "Pretendard-ExtraLight",
                    "sans-serif",
                ],
                "pretendard-regular": ["Pretendard-Regular", "sans-serif"],
                "pretendard-medium": ["Pretendard-Medium", "sans-serif"],
                "pretendard-semibold": ["Pretendard-SemiBold", "sans-serif"],
                "pretendard-bold": ["Pretendard-Bold", "sans-serif"],
                "pretendard-extrabold": ["Pretendard-ExtraBold", "sans-serif"],
                "pretendard-black": ["Pretendard-Black", "sans-serif"],
                "gmarket-medium": ["GmarketSansMedium", "sans-serif"],
                "gmarket-bold": ["GmarketSansBold", "sans-serif"],
                "gmarket-light": ["GmarketSansLight", "sans-serif"],
            },
            colors: {
                main: {
                    normal: "#84D1BF",
                    light: "#B2E7DB",
                    strong: "#5E8A8O",
                    sub: "#FFD19B",
                },
                background: {
                    main: "#F7F7F7",
                    topbar: "#F7F7F7",
                    navbar: "#FFFFFF",
                    dim: "#2C2C2C",
                },
                gs: {
                    black: "#2C2C2C",
                    90: "#414141",
                    80: "#565656",
                    70: "#6B6B6B",
                    60: "#808080",
                    50: "#959595",
                    40: "#ABABAB",
                    30: "#C0C0C0",
                    20: "#D5D5D5",
                    10: "#EAEAEA",
                    white: "#FFFFFF",
                },
                tag: {
                    calendar_pillca: "#FFD8D5",
                    calendar_injection: "#D5F1FC",
                    calendar_hospital: "#E2F7D6",
                    calendar_etc: "#FEF7CE",
                },
                status: {
                    update_notification: "#FF786E",
                    destructive: "#FF786E",
                    disabled: "#F2F2F2",
                    btn_disabled: "#DAEDE8",
                },
            },
        },
    },
    plugins: [],
};
