import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import "./globals.css";
import { useEffect } from "react";

export default function RootLayout() {
    const [loaded, error] = useFonts({
        "pretendard-thin": require("../assets/fonts/Pretendard-Thin.otf"),
        "pretendard-light": require("../assets/fonts/Pretendard-Light.otf"),
        "pretendard-extralight": require("../assets/fonts/Pretendard-ExtraLight.otf"),
        "pretendard-regular": require("../assets/fonts/Pretendard-Regular.otf"),
        "pretendard-medium": require("../assets/fonts/Pretendard-Medium.otf"),
        "pretendard-semibold": require("../assets/fonts/Pretendard-SemiBold.otf"),
        "pretendard-bold": require("../assets/fonts/Pretendard-Bold.otf"),
        "pretendard-extrabold": require("../assets/fonts/Pretendard-ExtraBold.otf"),
        "pretendard-black": require("../assets/fonts/Pretendard-Black.otf"),
        "gmarket-medium": require("../assets/fonts/GmarketSansMedium.otf"),
        "gmarket-bold": require("../assets/fonts/GmarketSansBold.otf"),
        "gmarket-light": require("../assets/fonts/GmarketSansLight.otf"),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    // 폰트가 로드되지 않았거나 에러가 발생한 경우 아무것도 보여주지 않음
    if (!loaded && !error) {
        return null;
    }

    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        ></Stack>
    );
}
