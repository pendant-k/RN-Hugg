import { Text, View, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";

// Splash 화면 (진입 화면)
export default function Index() {
    const router = useRouter();

    // 3초 후 온보딩 화면으로 이동
    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         router.replace("/(auth)/onboarding");
    //     }, 3000);
    //     return () => clearTimeout(timeout);
    // }, []);

    return (
        <SafeAreaView className="flex-1 flex-col items-center bg-background-main">
            <Text className="text-4xl text-main-normal font-pretendard-bold">
                Splash Screen 입니다
            </Text>
        </SafeAreaView>
    );
}
