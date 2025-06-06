import { View, Pressable } from "react-native";
import React from "react";
import HGText from "../text/HGText";
import clsx from "clsx";

// TODO: 텍스트 -> 아이콘 이미지로 수정

interface Props {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

const HGCounter = ({ count, onIncrease, onDecrease }: Props) => {
    return (
        <View className="flex-row items-center justify-center w-[168px]">
            <Pressable
                className={clsx(
                    "size-[48px] bg-main-normal rounded-l-[8px] items-center justify-center",
                    count === 0 && "bg-status-disabled"
                )}
                onPress={onDecrease}
            >
                <HGText variant="h1" className="text-white text-[32px]">
                    -
                </HGText>
            </Pressable>
            <View className="flex-1 flex-row items-center justify-center bg-white h-[48px]">
                <HGText variant="h3" className="text-gs-90">
                    {count}
                </HGText>
            </View>
            <Pressable
                className="size-[48px] bg-main-normal rounded-r-[8px] items-center justify-center"
                onPress={onIncrease}
            >
                <HGText variant="h1" className="text-white text-[32px]">
                    +
                </HGText>
            </Pressable>
        </View>
    );
};

export default HGCounter;
