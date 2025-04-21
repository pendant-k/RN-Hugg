import { Text, View, SafeAreaView, Image } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import HGText from "@/components/text/HGText";
import { images } from "@/constants/images";

// Splash 화면 (진입 화면)
export default function Index() {
    const router = useRouter();

    // 3초 후 온보딩 화면으로 이동
    // TODO: Add user token check
    useEffect(() => {
        const timeout = setTimeout(() => {
            router.replace("/(auth)/onboarding");
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <SafeAreaView className="flex-1 flex-col items-center justify-center bg-background-main">
            <View className="flex-1" />
            <Image
                source={images.SplashLogo}
                className="w-full h-[85px] px-[44px] mb-[112px]"
                resizeMode="contain"
            />
            <Image
                source={images.SplashDeco}
                className="w-full h-[248px] pl-[58px]"
                resizeMode="contain"
            />
            <View className="h-[75.58px]" />
        </SafeAreaView>
    );
}
