import { View, Text } from "react-native";
import React from "react";
import SignupSlide from "../SignupSlide";
import HGText from "@/components/text/HGText";

const SelectTreatmentContent = () => {
    return (
        <SignupSlide title={"현재 받고 있는 시술을\n선택해주세요"}>
            <View className="h-[24px]" />
        </SignupSlide>
    );
};

export default SelectTreatmentContent;
