import { View, Text } from "react-native";
import React from "react";
import HGText from "../text/HGText";

interface Props {
    title: string;
    children: React.ReactNode;
}

const SignupSlide = ({ title, children }: Props) => {
    return (
        <>
            <HGText variant="h1" className="text-gs-80">
                {title}
            </HGText>
            <View className="h-full">{children}</View>
        </>
    );
};

export default SignupSlide;
