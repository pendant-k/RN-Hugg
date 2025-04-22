import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useRef, useState } from "react";

import Swiper from "react-native-swiper";
import HGBorderedButton from "@/components/buttons/HGBorderedButton";
import HGText from "@/components/text/HGText";
import HGAppBar from "@/components/HGAppBar";
import InquiryText from "@/components/auth/InquiryText";
import AgreementContent from "@/components/auth/signup/AgreementContent";
import PermissionContent from "@/components/auth/signup/PermissionContent";
import SSNInputContent from "@/components/auth/signup/SSNInputContent";
import useSignupStore from "@/stores/useSignupStore";

const Signup = () => {
    const { termsAgreement, privacyAgreement, ageAgreement } = useSignupStore();
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

    const enables: Record<number, boolean> = {
        0: termsAgreement && privacyAgreement && ageAgreement,
        1: false,
        2: false,
        3: false,
    };

    return (
        <SafeAreaView className="flex-1 bg-background-main">
            <HGAppBar title="회원가입" onPressBack={handlePrev} />

            <View className="h-[38px]" />

            {/* 페이지 진행 표시 영역 */}
            <View className="w-full h-[10px] flex flex-row gap-[2px] px-[16px]">
                <View className="w-[20px] h-[10px] bg-main-sub rounded-full" />
                <View className="w-[10px] h-[10px] bg-gs-20 rounded-full" />
                <View className="w-[10px] h-[10px] bg-gs-20 rounded-full" />
            </View>

            <View className="h-[16px]" />
            <Swiper
                loop={false}
                ref={swiperRef}
                showsPagination={false}
                showsButtons={false}
                className=""
                index={progress}
                onIndexChanged={(index) => {
                    setProgress(index);
                }}
            >
                {/* 회원가입 폼 영역 */}
                <View className="flex-1 px-[16px]">
                    <AgreementContent />
                </View>
                <View className="flex-1 px-[16px]">
                    <PermissionContent />
                </View>
                <View className="flex-1 px-[16px]">
                    <SSNInputContent />
                </View>
                <View className="flex-1 px-[16px]">
                    <HGText variant="h1" className="text-gs-black">
                        회원가입
                    </HGText>
                </View>
            </Swiper>
            {/* 하단 버튼 영역 */}
            <View className="h-[136px]">
                <HGBorderedButton
                    title="다음"
                    onPress={handleNext}
                    enable={enables[progress]}
                />
                <View className="h-[12px]" />
                {progress === 0 && <InquiryText />}
            </View>
        </SafeAreaView>
    );
};

export default Signup;
