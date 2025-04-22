import { View } from "react-native";
import SignupSlide from "../SignupSlide";

const SelectCountContent = () => {
    return (
        <SignupSlide title={"현재 진행중인 회차를\n알려주세요"}>
            <View className="h-[24px]" />
        </SignupSlide>
    );
};

export default SelectCountContent;
