import { View, Image, ImageSourcePropType } from "react-native";
import React from "react";
import HGText from "../text/HGText";

interface Props {
    imageSrc: ImageSourcePropType;
    title: string;
    description: string;
}

const OnboardingSlide = ({ imageSrc, title, description }: Props) => {
    return (
        <>
            <Image
                source={imageSrc}
                className="w-full h-[375px]"
                resizeMode="contain"
            />
            <View className="h-[12px]" />
            <View className="flex flex-col items-center gap-[5px]">
                <HGText variant="h1" className="text-gs-black">
                    {title}
                </HGText>
                <HGText variant="p1" className="text-gs-80 text-center">
                    {description}
                </HGText>
            </View>
            <View className="h-[12px]" />
        </>
    );
};

export default OnboardingSlide;
