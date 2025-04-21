import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";
import { clsx } from "clsx";
import { images } from "@/constants/images";
import HGText from "../text/HGText";

interface Props {
    onPress: () => void;
    onSkip: () => void;
    showPrev: boolean;
    showSkip: boolean;
}

const OnboardingAppBar = ({ onPress, onSkip, showPrev, showSkip }: Props) => {
    return (
        <View className="flex flex-row items-center justify-between py-[15px] border-b border-gs-20 px-[26px]">
            <TouchableOpacity onPress={onPress}>
                <Image
                    source={icons.ChevronLeft}
                    className={clsx("size-[24px]", !showPrev && "opacity-0")}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <Image
                source={images.SplashLogo}
                className="w-[86px] h-[26px]"
                resizeMode="contain"
            />
            <TouchableOpacity
                onPress={onSkip}
                className={clsx(!showSkip && "opacity-0")}
            >
                <HGText variant="h4" className="text-gs-60" text="skip" />
            </TouchableOpacity>
        </View>
    );
};

export default OnboardingAppBar;
