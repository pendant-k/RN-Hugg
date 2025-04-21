import { TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import clsx from "clsx";
import { colors } from "@/constants/colors";

interface Props {
    onPress: () => void;
    visible: boolean;
    direction: "left" | "right";
    size?: number;
    color?: string;
}

const HGChevronButton = ({
    onPress,
    visible,
    direction,
    size,
    color,
}: Props) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Ionicons
                name={direction === "left" ? "chevron-back" : "chevron-forward"}
                size={size ?? 28}
                color={color ?? colors.gs[50]}
                className={clsx(!visible && "opacity-0")}
            />
        </TouchableOpacity>
    );
};

export default HGChevronButton;
