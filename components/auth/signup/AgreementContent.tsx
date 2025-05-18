import { View, Pressable } from "react-native";
import SignupSlide from "../SignupSlide";
import HGText from "@/components/text/HGText";
import { useState } from "react";
import HGCheckbox from "@/components/HGCheckbox";
import * as Linking from "expo-linking";
import { urls } from "@/constants/urls";
import HGChevronButton from "@/components/buttons/HGChevronButton";
import useSignupStore from "@/stores/useSignupStore";
import HGBorderedButton from "@/components/buttons/HGBorderedButton";

const AgreementContent = () => {
    const {
        termsAgreement,
        privacyAgreement,
        ageAgreement,
        setTermsAgreement,
        setPrivacyAgreement,
        setAgeAgreement,
    } = useSignupStore();

    const allAgreement = termsAgreement && privacyAgreement && ageAgreement;

    const handleAllAgreement = (value: boolean) => {
        setTermsAgreement(value);
        setPrivacyAgreement(value);
        setAgeAgreement(value);
    };

    return (
        <SignupSlide title={"허그를 이용하려면\n약관 동의가 필요해요!"}>
            {/* 전체 동의 버튼 */}
            <View className="w-full flex-row items-center py-[13px] px-[12px] border border-main-normal rounded-[8px] mt-[24px] gap-[8px] bg-gs-white mb-[24px]">
                <HGCheckbox
                    value={allAgreement}
                    onValueChange={handleAllAgreement}
                />
                <HGText variant="h3" className="text-gs-black">
                    전체 동의
                </HGText>
            </View>
            <AgreementItem
                checked={termsAgreement}
                onValueChange={setTermsAgreement}
                url={urls.terms}
            >
                <HGText variant="p2" className="text-gs-90 underline">
                    {"허그 이용약관"}
                </HGText>
                {"에 동의합니다."}
            </AgreementItem>
            <AgreementItem
                checked={privacyAgreement}
                onValueChange={setPrivacyAgreement}
                url={urls.privacy}
            >
                <HGText variant="p2" className="text-gs-90 underline">
                    {"개인정보 수집/이용"}
                </HGText>
                {"에 동의합니다."}
            </AgreementItem>
            <AgreementItem
                checked={ageAgreement}
                onValueChange={setAgeAgreement}
            >
                {"본인은 만 14세 이상입니다."}
            </AgreementItem>
        </SignupSlide>
    );
};

export default AgreementContent;

const AgreementItem = ({
    children,
    url,
    onValueChange,
    checked,
}: {
    children: React.ReactNode;
    url?: string;
    onValueChange: (value: boolean) => void;
    checked: boolean;
}) => {
    return (
        <View className="w-full flex flex-row pr-[12px] pl-[36px] items-center justify-between mb-[24px]">
            <View className="flex-row items-center">
                <HGCheckbox value={checked} onValueChange={onValueChange} />
                <View className="w-[8px]" />
                <Pressable
                    onPress={() => {
                        if (url) {
                            Linking.openURL(url);
                        }
                    }}
                >
                    <HGText variant="p2" className="text-gs-90">
                        {children}
                    </HGText>
                </Pressable>
                <View className="w-[4px]" />
                <HGText variant="p2" className="text-main-strong">
                    {"(필수)"}
                </HGText>
            </View>
            <HGChevronButton
                direction="right"
                onPress={() => {}}
                visible={url !== null}
                size={20}
            />
        </View>
    );
};
