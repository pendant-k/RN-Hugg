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
import SelectSurgeryContent from "@/components/auth/signup/SelectSurgeryContent";
import DotIndicator from "@/components/common/DotIndicator";
import { colors } from "@/constants/colors";
import SelectCountContent from "@/components/auth/signup/SelectCountContent";
import SelectStartDateContent from "@/components/auth/signup/SelectStartDateContent";
import WifeSpouseCodeContent from "@/components/auth/signup/WifeSpouseCodeContent";
import HusbandSpouseCodeContent from "@/components/auth/signup/HusbandSpouseCodeContent";

const Signup = () => {
    const { termsAgreement, privacyAgreement, ageAgreement, ssn } =
        useSignupStore();
    const [progress, setProgress] = useState(0);
    const swiperRef = useRef<Swiper>(null);

    const isAllDigits = (str: string): boolean => {
        return /^\d+$/.test(str);
    };

    const handleNext = () => {
        // permission일 경우에만 분기 필요함
        if (progress === 1) {
            // permission handler here
            console.log("permission handler");
        }

        if (swiperRef.current) {
            swiperRef.current.scrollBy(1, true);
        }
    };

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.scrollBy(-1, true);
        }
    };

    // 다음 버튼 활성화 여부
    const enables: Record<number, boolean> = {
        0: termsAgreement && privacyAgreement && ageAgreement,
        1: true,
        2: ssn.length === 7 && isAllDigits(ssn),
        3: true,
        4: true,
        5: true,
    };

    // dot indicator 인덱스 계산 (Figma 기준)
    const getSignupDotIndex = (progress: number): number => {
        if (progress <= 2) return 0;
        if (progress <= 5) return 1;
        return 2;
    };

    return (
        <SafeAreaView className="flex-1 bg-background-main">
            <HGAppBar
                title="회원가입"
                onPressBack={handlePrev}
                prevButtonVisible={progress > 0}
            />

            <View className="h-[38px]" />

            {/* 페이지 진행 표시 영역 */}
            <DotIndicator
                currentIndex={getSignupDotIndex(progress)}
                count={3}
                activeWidth={20}
                inactiveWidth={10}
                height={10}
                activeColor={colors.main.sub}
                inactiveColor={colors.gs[20]}
            />

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
                scrollEnabled={false}
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
                    <SelectSurgeryContent />
                </View>
                <View className="flex-1 px-[16px]">
                    <SelectCountContent />
                </View>
                <View className="flex-1 px-[16px]">
                    <SelectStartDateContent />
                </View>
                <View className="flex-1 px-[16px]">
                    <WifeSpouseCodeContent />
                </View>
                <View className="flex-1 px-[16px]">
                    <HusbandSpouseCodeContent />
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
