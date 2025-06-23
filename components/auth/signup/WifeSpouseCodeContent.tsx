import { View, Pressable, Image } from "react-native";
import React from "react";
import SignupSlide from "../SignupSlide";
import HGText from "@/components/text/HGText";
import ShareIcon from "@/assets/icons/share.png";
import HGPickerButton from "@/components/common/HGPickerButton";

const WifeSpouseCodeContent = () => {
    // get spouse code from api
    // with query?
    return (
        <SignupSlide title={"배우자 코드를 남편에게\n공유해주세요"}>
            <View className="h-[24px]" />

            <View className="flex flex-row items-center justify-start">
                <HGPickerButton
                    imageSrc={ShareIcon}
                    onPress={() => {}}
                    label="000000"
                />
            </View>
        </SignupSlide>
    );
};

export default WifeSpouseCodeContent;
