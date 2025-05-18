import { View, Pressable } from "react-native";
import React from "react";
import HGText from "../text/HGText";
import ScalePressable from "./ScalePressable";
import clsx from "clsx";
interface Props {
    onPress: () => void;
    title: string;
    enable?: boolean;
}

const HGBorderedButton = ({ onPress, title, enable }: Props) => {
    return (
        <View className="w-full px-[16px]">
            <ScalePressable
                onPress={
                    enable
                        ? onPress
                        : () => {
                              return;
                          }
                }
            >
                <View
                    className={clsx(
                        "w-full flex items-center justify-center bg-white border border-main-light rounded-[8px] py-[16px]",
                        !enable && "bg-[#FBFBFB] text-gs-30 border-[#D9F0EB]"
                    )}
                >
                    <HGText variant="btn" className="text-gs-70 text-center">
                        {title}
                    </HGText>
                </View>
            </ScalePressable>
        </View>
    );
};

export default HGBorderedButton;
