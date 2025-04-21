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
    switch (variant) {
        case "btn":
            return (
                <Text
                    className={clsx(
                        "font-pretendard-semibold text-[24px] leading-none",
                        className
                    )}
                >
                    {text}
                </Text>
            );
        case "h1":
            return (
                <Text
                    className={clsx(
                        "font-pretendard-semibold text-[24px] leading-[1.4]",
                        className
                    )}
                >
                    {text}
                </Text>
            );
        case "h2":
            return (
                <Text
                    className={clsx(
                        "font-pretendard-semibold text-[20px] leading-[1.4]",
                        className
                    )}
                >
                    {text}
                </Text>
            );
        case "h3":
            return (
                <Text
                    className={clsx(
                        "font-pretendard-semibold text-[16px] leading-[1.4]",
                        className
                    )}
                >
                    {text}
                </Text>
            );
        case "h4":
            return (
                <Text
                    className={
                        "font-pretendard-semibold tex-[16px] leading-[1.4]"
                    }
                >
                    {text}
                </Text>
            );
        case "p1":
            return (
                <Text
                    className={clsx(
                        "font-pretendard-medium text-[16px] leading-[1.4]",
                        className
                    )}
                >
                    {text}
                </Text>
            );
        case "p1_L":
            return (
                <Text
                    className={clsx(
                        "font-pretendard-regular text-[16px] leading-[1.5]",
                        className
                    )}
                >
                    {text}
                </Text>
            );
        case "p2":
            return (
                <Text
                    className={clsx(
                        "font-pretendard-medium text-[14px] leading-[1.4]",
                        className
                    )}
                >
                    {text}
                </Text>
            );
        case "p2_L":
            return (
                <Text
                    className={clsx(
                        "font-pretendard-light text-[14px] leading-[1.4]",
                        className
                    )}
                >
                    {text}
                </Text>
            );
        case "p3":
            return (
                <Text
                    className={clsx(
                        "font-pretendard-medium text-[12px] leading-[1.4]",
                        className
                    )}
                >
                    {text}
                </Text>
            );

        case "p3_L":
            return (
                <Text
                    className={clsx(
                        "font-pretendard-regular text-[12px] leading-[1.4]",
                        className
                    )}
                >
                    {text}
                </Text>
            );
        case "p4":
            return (
                <Text
                    className={clsx(
                        "font-pretendard-regular text-[10px] leading-[1.4]",
                        className
                    )}
                >
                    {text}
                </Text>
            );
        case "p5":
            return (
                <Text
                    className={clsx(
                        "font-pretendard-regular text-[8px] leading-[1.4]",
                        className
                    )}
                >
                    {text}
                </Text>
            );
        case "point":
            return (
                <Text
                    className={clsx(
                        "font-pretendard-semibold text-[40px] leading-none",
                        className
                    )}
                >
                    {text}
                </Text>
            );
        case "title":
            return (
                <Text
                    className={clsx(
                        "font-gmarket-medium text-[40px] leading-none",
                        className
                    )}
                >
                    {text}
                </Text>
            );

        default:
            return (
                <Text className={clsx("font-pretendard-regular", className)}>
                    {text}
                </Text>
            );
    }
};

export default HGText;
