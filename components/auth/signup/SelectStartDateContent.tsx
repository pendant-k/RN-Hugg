import { View, Image, Text, Pressable, Platform } from "react-native";
import SignupSlide from "../SignupSlide";
import useSignupStore from "@/stores/useSignupStore";
import calendarIcon from "@/assets/icons/calendar.png";
import { useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import HGText from "@/components/text/HGText";

const SelectStartDateContent = () => {
    const { startAt, setStartAt } = useSignupStore();
    const [showDatePicker, setShowDatePicker] = useState(false);

    // yyyy-mm-dd 포맷으로 변환하는 함수
    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    return (
        <SignupSlide title={"치료 시작 날짜를\n알려주세요"}>
            <View className="h-[24px]" />
            <Pressable
                className="flex flex-row items-center justify-start mb-[24px]"
                onTouchEnd={() => {
                    setShowDatePicker(!showDatePicker);
                }}
            >
                <View className="flex flex-row items-center justify-center bg-main-normal size-[48px] rounded-l-[4px]">
                    <Image source={calendarIcon} className="size-[24px]" />
                </View>
                <View className="flex flex-row w-[176px] h-[48px] bg-white items-center justify-center rounded-r-[4px]">
                    <HGText variant="h3" className="text-gs-80">
                        {formatDate(startAt)}
                    </HGText>
                </View>
            </Pressable>
            {showDatePicker && (
                <View className="flex flex-col items-center">
                    <RNDateTimePicker
                        mode="date"
                        value={startAt}
                        display={Platform.OS === "ios" ? "spinner" : "default"}
                        onChange={(event, selectedDate) => {
                            if (selectedDate) {
                                setStartAt(selectedDate);
                            }
                        }}
                        // iOS에서만 사용 가능한 스타일링 옵션들
                        {...(Platform.OS === "ios" && {
                            textColor: "#1f2937", // 다크 그레이 텍스트
                            accentColor: "#10b981", // 초록색 액센트 (선택된 날짜)
                            backgroundColor: "#ffffff", // 흰색 배경
                        })}
                        // Android에서만 사용 가능한 옵션들
                        {...(Platform.OS === "android" && {
                            positiveButtonLabel: "확인",
                            negativeButtonLabel: "취소",
                        })}
                    />
                </View>
            )}
            <View className="h-full" />
        </SignupSlide>
    );
};

export default SelectStartDateContent;
