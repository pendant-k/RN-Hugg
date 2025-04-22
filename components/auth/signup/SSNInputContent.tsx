import { View, Text } from "react-native";
import React from "react";
import SignupSlide from "../SignupSlide";
import HGText from "@/components/text/HGText";

const SSNInputContent = () => {
    return (
        <SignupSlide
            customTitle={
                <HGText variant="h1" className="text-gs-80">
                    {"주민번호 "}
                    <HGText variant="h1" className="text-main-normal">
                        앞 7자리
                    </HGText>
                    {"를\n적어주세요"}
                </HGText>
            }
        >
            <View className="h-[12px]" />
        </SignupSlide>
    );
};

export default SSNInputContent;
