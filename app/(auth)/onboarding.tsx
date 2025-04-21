import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from "react-native";

import React, { useState } from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import clsx from "clsx";
import HGText from "@/components/text/HGText";
import OnboardingAppBar from "@/components/onboarding/OnboardingAppBar";

const Onboarding = () => {
    const [progress, setProgress] = useState(0);

    return (
        <SafeAreaView className="flex-1 bg-background-main">
            <OnboardingAppBar
                onPress={() => setProgress(progress - 1)}
                showPrev={progress > 0}
                onSkip={() => setProgress(4)}
                showSkip={progress < 4}
            />
            {/* Slide */}
            <Image
                source={images.Onboarding1}
                className="w-full h-[320px]"
                resizeMode="contain"
            />
        </SafeAreaView>
    );
};

export default Onboarding;
