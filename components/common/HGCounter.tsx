import { View, Text } from "react-native";
import React, { useState } from "react";

/**
 * number 값 입력 시 사용되는 카운터 컴포넌트
 */
const HGCounter = () => {
    const [count, setCount] = useState(0);
    return (
        <View className="flex-row items-center justify-center gap-[8px]">
            <View className="size-[48px] bg-[#F2F2F2] rounded-[4px]">
                <Text>-</Text>
            </View>
            <Text>{count}</Text>
            <View className="size-[48px] bg-gs-10 rounded-[4px]">
                <Text>+</Text>
            </View>
        </View>
    );
};

export default HGCounter;
