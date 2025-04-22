import { View, Text } from "react-native";
import React from "react";
import SignupSlide from "../SignupSlide";
import HGText from "@/components/text/HGText";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
const PermissionContent = () => {
    return (
        <SignupSlide title={"앱 접근 권한을 안내드려요"}>
            <HGText variant="h3" className="text-gs-70 mb-[33px]">
                허그는 꼭 필요한 권한만 선택적으로 받고 있어요!
            </HGText>
            <View className="w-full bg-white rounded-[8px] flex flex-col items-start p-[12px]">
                <HGText
                    variant="p3_L"
                    className="w-full text-gs-80 text-center mb-[16px]"
                >
                    {`아래 선택 접근 권한은 해당 기능 이용 시 동의를 받고 있으며,\n비 허용 시에도 해당 기능 외 서비스 이용이 가능합니다.`}
                </HGText>
                <PermissionSectionTitle title="선택적 접근 권한" />
                <PermissionItem
                    title="알림"
                    description="허그 알림을 받을 수 있어요."
                    iconType="notification"
                />
                <PermissionItem
                    title="카메라"
                    description="카메라를 사용할 수 있어요."
                    iconType="camera"
                />
                <View className="h-[24px]" />

                <PermissionSectionTitle title="접근권한 변경" />
                <HGText variant="h4" className="text-gs-90">
                    {"휴대폰 설정 > HUGG"}
                </HGText>
            </View>
        </SignupSlide>
    );
};

export default PermissionContent;

const PermissionSectionTitle = ({ title }: { title: string }) => {
    return (
        <HGText variant="p2" className="text-main-strong mb-[6px]">
            {title}
        </HGText>
    );
};

const PermissionItem = ({
    title,
    description,
    iconType,
}: {
    title: string;
    description: string;
    iconType: "notification" | "camera";
}) => {
    return (
        <View className="w-full flex flex-row items-center justify-start gap-[12px]">
            <Ionicons
                name={
                    iconType === "notification"
                        ? "notifications-outline"
                        : "camera-outline"
                }
                size={36}
                color={colors.gs[80]}
                className="p-[8px]"
            />
            <View className="flex flex-col justify-center items-start gap-[2px]">
                <HGText variant="h3" className="text-gs-90">
                    {title}
                </HGText>
                <HGText variant="p2_L" className="text-gs-90">
                    {description}
                </HGText>
            </View>
        </View>
    );
};
