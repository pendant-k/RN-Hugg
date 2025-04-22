import { View, Text } from "react-native";
import React from "react";
import SignupSlide from "../SignupSlide";
import HGText from "@/components/text/HGText";
const AgreementContent = () => {
    return (
        <SignupSlide title={"허그를 이용하려면\n약관 동의가 필요해요!"}>
            {/* 전체 동의 버튼 */}
            <View className="w-full py-[13px] px-[12px] border border-main-normal rounded-[8px] mt-[24px]">
                <HGText variant="h3" className="text-gs-black">
                    전체 동의
                </HGText>
            </View>
        </SignupSlide>
    );
};

export default AgreementContent;
