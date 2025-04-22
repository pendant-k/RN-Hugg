import { View } from "react-native";
import SignupSlide from "../SignupSlide";

const SelectStartDateContent = () => {
    return (
        <SignupSlide title={"치료 시작 날짜를\n알려주세요"}>
            <View className="h-[24px]" />
        </SignupSlide>
    );
};

export default SelectStartDateContent;
