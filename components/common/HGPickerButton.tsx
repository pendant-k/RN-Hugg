import {
    View,
    Text,
    Pressable,
    Image,
    ImageSourcePropType,
} from "react-native";
import React from "react";
import HGText from "../text/HGText";

interface Props {
    imageSrc: ImageSourcePropType | undefined;
    onPress: () => void;
    label: string;
}

/**
 * 피커 버튼 - 좌측에는 아이콘, 우측에는 라벨 텍스트가 들어갑니다.
 * @param imageSrc 이미지 소스
 * @param onPress 버튼 클릭 이벤트
 */
const HGPickerButton = ({ imageSrc, onPress, label }: Props) => {
    return (
        <Pressable
            className="flex flex-row items-center justify-center h-[48px]"
            onPress={onPress}
        >
            <View className="size-[48px] bg-main-normal rounded-l-[4px] items-center justify-center">
                <Image source={imageSrc} className="size-[24px]" />
            </View>
            <View className="w-[128px] h-[48px] bg-white rounded-r-[4px] items-center justify-center">
                <HGText variant="h3" className="text-gs-black">
                    {label}
                </HGText>
            </View>
        </Pressable>
    );
};

export default HGPickerButton;
