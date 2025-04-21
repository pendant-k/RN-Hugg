import { View, Text, SafeAreaView } from "react-native";
import React, { useRef, useState } from "react";
import Swiper from "react-native-swiper";
import HGBorderedButton from "@/components/buttons/HGBorderedButton";
import HGText from "@/components/text/HGText";

const Signup = () => {
    const [progress, setProgress] = useState(0);
    const swiperRef = useRef<Swiper>(null);

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.scrollBy(1, true);
        }
    };

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.scrollBy(-1, true);
        }
    };

    const handleSkip = () => {
        if (swiperRef.current) {
            swiperRef.current.scrollTo(4, true);
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-background-main">
            <Swiper>
                {/* 회원가입 폼 영역 */}
                <View className="flex-1">
                    <HGText variant="h1" className="text-gs-black">
                        회원가입
                    </HGText>
                </View>
            </Swiper>
            {/* 하단 버튼 영역 */}
            <View className="h-[136px]">
                <HGBorderedButton title="다음" onPress={handleNext} />
            </View>
        </SafeAreaView>
    );
};

export default Signup;
