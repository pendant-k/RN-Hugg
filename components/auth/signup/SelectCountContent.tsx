import { View } from "react-native";
import SignupSlide from "../SignupSlide";
import HGCounter from "@/components/common/HGCounter";
import HGText from "@/components/text/HGText";
import useSignupStore from "@/stores/useSignupStore";

const SelectCountContent = () => {
    const { currentCount, setCurrentCount } = useSignupStore();

    return (
        <SignupSlide title={"현재 진행중인 회차를\n알려주세요"}>
            <View className="h-[24px]" />
            <View className="flex-row items-end gap-[8px]">
                <HGCounter
                    count={currentCount}
                    onIncrease={() => setCurrentCount(currentCount + 1)}
                    onDecrease={() => {
                        if (currentCount > 0) {
                            setCurrentCount(currentCount - 1);
                        }
                    }}
                />
                <HGText variant="h3" className="text-gs-70">
                    회차
                </HGText>
            </View>
        </SignupSlide>
    );
};

export default SelectCountContent;
