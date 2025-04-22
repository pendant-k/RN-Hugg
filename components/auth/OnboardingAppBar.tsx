import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";
import { clsx } from "clsx";
import { images } from "@/constants/images";
import HGText from "../text/HGText";
import HGChevronButton from "../buttons/HGChevronButton";
import { colors } from "@/constants/colors";

interface Props {
    onPrev: () => void;
    onSkip: () => void;
    showPrev: boolean;
    showSkip: boolean;
}

const OnboardingAppBar = ({ onPrev, onSkip, showPrev, showSkip }: Props) => {
    return (
        <View className="w-full flex flex-row items-center justify-between py-[15px] border-b border-gs-20 px-[26px]">
            <HGChevronButton
                onPress={onPrev}
                visible={showPrev}
                direction="left"
                size={28}
                color={colors.gs[60]}
            />
            <Image
                source={images.SplashLogo}
                className="w-[86px] h-[26px]"
                resizeMode="contain"
            />
            <TouchableOpacity
                onPress={onSkip}
                className={clsx(!showSkip && "opacity-0")}
            >
                <HGText variant="h4" className="text-gs-60">
                    skip
                </HGText>
            </TouchableOpacity>
        </View>
    );
};

export default OnboardingAppBar;
