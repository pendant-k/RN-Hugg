import { View, Text, TextInput } from "react-native";
import React from "react";
import SignupSlide from "../SignupSlide";
import HGText from "@/components/text/HGText";

const HusbandSpouseCodeContent = () => {
    return (
        <SignupSlide title={"아내에게 받은 배우자 코드를\n입력해주세요"}>
            <View className="h-[24px]" />
            <TextInput
                className="border border-gs-30 rounded-lg p-2 mb-[8px]"
                placeholder="000000"
            />
            <HGText variant="p3_L" className="text-gs-90">
                아내에게 받은 공유 코드를 입력해주세요
            </HGText>
        </SignupSlide>
    );
};

export default HusbandSpouseCodeContent;
