import { View, Text } from "react-native";
import React from "react";
import HGText from "../text/HGText";

interface Props {
    title?: string;
    children: React.ReactNode;
    customTitle?: React.ReactNode;
}

const SignupSlide = ({ title, children, customTitle }: Props) => {
    return (
        <>
            {customTitle ? (
                customTitle
            ) : (
                <HGText variant="h1" className="text-gs-80">
                    {title ?? "타이틀"}
                </HGText>
            )}
            <View className="flex-1">{children}</View>
        </>
    );
};

export default SignupSlide;
