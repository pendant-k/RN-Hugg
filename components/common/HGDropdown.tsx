import { SurgeryType } from "@/types/domain/user";
import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    LayoutAnimation,
} from "react-native";

import HGText from "@/components/text/HGText";

interface DropdownProps {
    items: SurgeryType[];
    onSelect: (item: SurgeryType) => void;
    placeholder?: string;
    selectedItem?: SurgeryType | null;
}

const HGDropdown = ({
    items,
    onSelect,
    placeholder = "선택해주세요",
    selectedItem,
}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsOpen(!isOpen);
    };

    const handleSelect = (item: SurgeryType) => {
        onSelect(item);
        toggleDropdown();
    };

    return (
        <View className="w-full">
            <TouchableOpacity
                className="flex-row items-center justify-between h-[48px] w-full"
                onPress={toggleDropdown}
                activeOpacity={0.7}
            >
                <View className="flex-row items-center justify-between h-[48px] px-4 rounded-l-[8px] bg-white flex-1">
                    <HGText variant="h3" className="text-gs-90">
                        {selectedItem ? selectedItem : placeholder}
                    </HGText>
                </View>
                <View className="w-[48px] h-[48px] items-center justify-center rounded-r-[8px] bg-main-normal">
                    <Text
                        className={`text-xl text-white ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    >
                        ▼
                    </Text>
                </View>
            </TouchableOpacity>

            {isOpen && (
                <View className="absolute top-[50px] left-0 right-0 bg-white rounded-[8px] z-[999] shadow-sm">
                    {items.map((item, index) => (
                        <TouchableOpacity
                            key={item}
                            className={`p-[12px] ${
                                selectedItem === item && "bg-background-topbar"
                            } ${index === 0 ? "rounded-t-[8px]" : ""} ${
                                index === items.length - 1
                                    ? "rounded-b-[8px]"
                                    : ""
                            }`}
                            onPress={() => handleSelect(item)}
                        >
                            <HGText variant="h3" className="text-gs-70">
                                {item}
                            </HGText>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

export default HGDropdown;
