import { View, Text } from "react-native";
import React from "react";
import HGText from "../text/HGText";

const InquiryText = () => {
    return (
        <View className="flex flex-row items-center justify-center gap-[4px]">
            <HGText variant="p2" className="text-gs-70">
                약관 문의
            </HGText>
            <HGText variant="p2_L" className="text-gs-70">
                for.egg0302@gmail.com
            </HGText>
        </View>
    );
};

export default InquiryText;
