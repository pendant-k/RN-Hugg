import { View, Pressable } from "react-native";
import React from "react";
import HGText from "../text/HGText";
import ScalePressable from "./ScalePressable";
interface Props {
    onPress: () => void;
    title: string;
}

const HGBorderedButton = ({ onPress, title }: Props) => {
    return (
        <View className="w-full px-[16px]">
            <ScalePressable onPress={onPress}>
                <View className="w-full flex items-center justify-center bg-white border border-main-light rounded-[8px] py-[16px]">
                    <HGText variant="btn" className="text-gs-70 text-center">
                        {title}
                    </HGText>
                </View>
            </ScalePressable>
        </View>
    );
};

export default HGBorderedButton;
