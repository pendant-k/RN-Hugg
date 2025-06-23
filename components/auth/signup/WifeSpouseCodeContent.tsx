import { View, Pressable, Image, Alert } from "react-native";
import React, { useState } from "react";
import SignupSlide from "../SignupSlide";
import HGText from "@/components/text/HGText";
import ShareIcon from "@/assets/icons/share.png";
import HGPickerButton from "@/components/common/HGPickerButton";

import * as Clipboard from "expo-clipboard";

const WifeSpouseCodeContent = () => {
    // get spouse code from api
    // with query?
    const [spouseCode, setSpouseCode] = useState("123456");
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(spouseCode);
        // change to toast message
        Alert.alert("복사되었습니다.");
    };

    return (
        <SignupSlide title={"배우자 코드를 남편에게\n공유해주세요"}>
            <View className="h-[24px]" />

            <View className="flex flex-row items-center justify-start">
                <HGPickerButton
                    imageSrc={ShareIcon}
                    onPress={copyToClipboard}
                    label="000000"
                />
            </View>
            {isCopied && (
                <HGText variant="h3" className="text-gray-500 mt-4">
                    코드가 클립보드에 복사되었습니다.
                </HGText>
            )}
        </SignupSlide>
    );
};

export default WifeSpouseCodeContent;
