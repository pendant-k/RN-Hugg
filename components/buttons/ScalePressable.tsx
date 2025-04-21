import { Pressable, Animated } from "react-native";
import { useRef } from "react";

interface Props {
    children: React.ReactNode;
    onPress: () => void;
}

const TOUCH_SCALE_RATIO = 0.96;
const DEFAULT_SCALE_RATIO = 1;

const ScalePressable = ({ children, onPress }: Props) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: TOUCH_SCALE_RATIO,
            useNativeDriver: true,
            speed: 50,
            bounciness: 8,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: DEFAULT_SCALE_RATIO,
            useNativeDriver: true,
            speed: 50,
            bounciness: 8,
        }).start();
    };

    return (
        <Pressable
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Animated.View
                style={[
                    {
                        transform: [{ scale: scaleAnim }],
                    },
                ]}
            >
                {children}
            </Animated.View>
        </Pressable>
    );
};

export default ScalePressable;
