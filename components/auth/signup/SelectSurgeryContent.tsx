import { View } from "react-native";
import React, { useState } from "react";
import SignupSlide from "../SignupSlide";
import Dropdown from "@/components/common/Dropdown";
import { SurgeryType } from "@/types/domain/user";
import useSignupStore from "@/stores/useSignupStore";

const SelectSurgeryContent = () => {
    const { surgeryType, setSurgeryType } = useSignupStore();

    const surgeryItems: SurgeryType[] = [
        SurgeryType.THINK_SURGERY,
        SurgeryType.IUI,
        SurgeryType.EGG_FREEZING,
        SurgeryType.IN_VITRO_FERITILIZATION,
    ];

    const handleSelect = (item: SurgeryType) => {
        setSurgeryType(item);
    };

    return (
        <SignupSlide title={"현재 받고 있는 시술을\n선택해주세요"}>
            <View className="h-[24px]" />
            <Dropdown
                items={surgeryItems}
                selectedItem={surgeryType}
                onSelect={handleSelect}
                placeholder="시술을 선택해주세요"
            />
        </SignupSlide>
    );
};

export default SelectSurgeryContent;
