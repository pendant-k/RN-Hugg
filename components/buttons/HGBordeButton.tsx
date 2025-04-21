import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import HGText from "../text/HGText";

interface Props {
    onPress: () => void;
    title: string;
}

const HGBordeButton = ({ onPress, title }: Props) => {
    return (
        <View className="w-full px-[16px]">
            <Pressable
                onPress={onPress}
                className="w-full flex items-center justify-center bg-white border border-main-light rounded-[8px] py-[16px]"
            >
                <HGText variant="btn" className="text-gs-70 text-center">
                    {title}
                </HGText>
            </Pressable>
        </View>
    );
};

export default HGBordeButton;
