import { Text, View, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import HGText from "@/components/text/HGText";

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
        <SafeAreaView className="flex-1 flex-col items-center bg-background-main"></SafeAreaView>
    );
}
