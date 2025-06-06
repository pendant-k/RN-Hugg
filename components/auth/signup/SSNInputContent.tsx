import { View, TextInput, Pressable } from "react-native";
import React, { useRef, useState } from "react";
import SignupSlide from "../SignupSlide";
import HGText from "@/components/text/HGText";
import useSignupStore from "@/stores/useSignupStore";

const SSNInputContent = () => {
    const { setSSN } = useSignupStore();
    const [value, setValue] = useState("");
    const hiddenInputRef = useRef<TextInput>(null);

    const handleSSNChange = (text: string) => {
        // 숫자만 필터링하고 7자리까지만 저장
        const numbers = text.replace(/[^0-9]/g, "").slice(0, 7);
        setValue(numbers);
        setSSN(numbers);
    };

    const handlePress = () => {
        hiddenInputRef.current?.focus();
    };

    // 7자리 배열로 변환 (빈 자리는 빈 문자열로)
    const digits = value.split("").concat(Array(7 - value.length).fill(""));

    return (
        <SignupSlide
            customTitle={
                <HGText variant="h1" className="text-gs-80">
                    {"주민번호 "}
                    <HGText variant="h1" className="text-main-normal">
                        앞 7자리
                    </HGText>
                    {"를\n적어주세요"}
                </HGText>
            }
        >
            {/* Space */}
            <View className="h-[12px]" />
            <View className="flex flex-col">
                <TextInput
                    ref={hiddenInputRef}
                    className="absolute opacity-0 w-0 h-0"
                    value={value}
                    onChangeText={handleSSNChange}
                    keyboardType="number-pad"
                    maxLength={7}
                />
                <Pressable
                    onPress={handlePress}
                    className="flex flex-row items-center justify-center gap-2 w-full"
                >
                    {digits.map((digit, index) => (
                        <React.Fragment key={index}>
                            {index === 6 && (
                                <HGText variant="h3" className="text-gs-50">
                                    -
                                </HGText>
                            )}
                            <View className="flex flex-row items-center justify-center bg-white w-[30px] h-[48px] rounded">
                                <HGText variant="h3" className="text-gs-90">
                                    {digit}
                                </HGText>
                            </View>
                        </React.Fragment>
                    ))}
                    <View className="bg-status-disabled flex-1 h-[48px]" />
                </Pressable>
            </View>
        </SignupSlide>
    );
};

export default SSNInputContent;
