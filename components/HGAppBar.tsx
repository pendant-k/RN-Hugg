import { View, Text } from "react-native";
import React from "react";
import HGChevronButton from "./buttons/HGChevronButton";
import { colors } from "@/constants/colors";
import HGText from "./text/HGText";

interface Props {
    title: string;
    onPressBack: () => void;
}

const HGAppBar = ({ title, onPressBack }: Props) => {
    return (
        <View className="flex flex-row items-center justify-between px-[28px] py-[16px] border-b border-gs-20">
            <HGChevronButton
                direction="left"
                onPress={onPressBack}
                visible={true}
                color={colors.gs[50]}
                size={28}
            />
            <HGText variant="h3" className="text-gs-black">
                {title}
            </HGText>
            {/* for spacing */}
            <HGChevronButton
                direction="right"
                onPress={() => {}}
                visible={false}
                color={colors.gs[50]}
            />
        </View>
    );
};

export default HGAppBar;
