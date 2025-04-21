import { View, Text } from "react-native";
import React from "react";
import clsx from "clsx";

type HGTextType =
    | "btn"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "p1"
    | "p1_L"
    | "p2"
    | "p2_L"
    | "p3"
    | "p3_L"
    | "p4"
    | "p5"
    | "point"
    | "title";

interface Props {
    variant: HGTextType;
    text: string;
    className?: string;
}

const HGText = ({ variant, text, className }: Props) => {
    const getTextStyle = () => {
        switch (variant) {
            case "h1":
                return "font-pretendard-semibold text-[24px] leading-[1.4]";
            case "h2":
                return "font-pretendard-semibold text-[20px] leading-[1.4]";
            case "h3":
                return "font-pretendard-semibold text-[18px] leading-[1.4]";
            case "h4":
                return "font-pretendard-semibold text-[16px] leading-[1.4]";
            case "p1":
                return "font-pretendard-medium text-[16px] leading-[1.4]";
            case "p2":
                return "font-pretendard-medium text-[14px] leading-[1.4]";
            case "p3":
                return "font-pretendard-medium text-[12px] leading-[1.4]";
            case "p4":
                return "font-pretendard-medium text-[10px] leading-[1.4]";
            case "p5":
                return "font-pretendard-medium text-[8px] leading-[1.4]";
            case "point":
                return "font-pretendard-semibold text-[14px] leading-[1.4]";
            case "title":
                return "font-pretendard-semibold text-[16px] leading-[1.4]";
            case "btn":
                return "font-pretendard-semibold text-[24px] leading-[1.4]";
            case "p1_L":
                return "font-pretendard-regular text-[16px] leading-[1.4]";
            case "p2_L":
                return "font-pretendard-regular text-[14px] leading-[1.4]";
            case "p3_L":
                return "font-pretendard-regular text-[12px] leading-[1.4]";
        }
    };

    return <Text className={clsx(getTextStyle(), className)}>{text}</Text>;
};

export default HGText;
