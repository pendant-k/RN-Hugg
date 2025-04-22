import { View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
    useAnimatedStyle,
    withTiming,
    useSharedValue,
} from "react-native-reanimated";
import { colors } from "@/constants/colors";

interface Props {
    currentIndex: number;
    count: number;
    activeWidth?: number;
    inactiveWidth?: number;
    height?: number;
    gap?: number;
    activeColor?: string;
    inactiveColor?: string;
}

const DotIndicator = ({
    currentIndex,
    count,
    activeWidth = 20,
    inactiveWidth = 10,
    height = 10,
    gap = 2,
    activeColor = colors.main.sub,
    inactiveColor = colors.gs[20],
}: Props) => {
    // 각 dot의 너비와 색상을 위한 animated value 배열
    const dotAnimations = Array.from({ length: count }, () => ({
        width: useSharedValue(inactiveWidth),
        color: useSharedValue(inactiveColor),
    }));

    useEffect(() => {
        // 모든 dot을 업데이트
        dotAnimations.forEach((dot, index) => {
            // 현재 인덱스와 같거나 이전 인덱스는 모두 active 상태
            const shouldBeActive = index <= currentIndex;
            dot.width.value = withTiming(
                shouldBeActive ? activeWidth : inactiveWidth,
                {
                    duration: 300,
                }
            );
            dot.color.value = withTiming(
                shouldBeActive ? activeColor : inactiveColor,
                {
                    duration: 300,
                }
            );
        });
    }, [currentIndex]);

    return (
        <View
            className="w-full h-[10px] flex flex-row px-[16px]"
            style={{ gap }}
        >
            {dotAnimations.map((dot, index) => {
                const animatedStyle = useAnimatedStyle(() => ({
                    width: dot.width.value,
                    height,
                    backgroundColor: dot.color.value,
                }));

                return (
                    <Animated.View
                        key={index}
                        style={[
                            {
                                borderRadius: height / 2,
                            },
                            animatedStyle,
                        ]}
                    />
                );
            })}
        </View>
    );
};

export default DotIndicator;
