import { icons } from "@/constants/icons";
import clsx from "clsx";
import { Pressable, Image } from "react-native";

interface Props {
    onValueChange?: (value: boolean) => void;
    value: boolean;
    className?: string;
}

export default function HGCheckbox({
    onValueChange,
    value,
    className,
    ...others
}: Props) {
    const handleChange = () => {
        onValueChange?.(!value);
    };

    return (
        <Pressable
            {...others}
            onPress={handleChange}
            className={clsx(
                "w-[18px] h-[18px] border border-gs-black rounded-[4px] flex items-center justify-center",
                className
            )}
        >
            {value && (
                <Image
                    source={icons.Checkmark}
                    className="size-[10px]"
                    resizeMode="contain"
                />
            )}
        </Pressable>
    );
}
