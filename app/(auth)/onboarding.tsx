// TODO: refac
// TODO: 카카오 로그인 구현
// TODO: 애플 로그인 구현

import { View, SafeAreaView, Image, Animated, Pressable } from "react-native";
import React, { useState, useRef } from "react";
import { images } from "@/constants/images";
import OnboardingAppBar from "@/components/onboarding/OnboardingAppBar";
import HGBordeButton from "@/components/buttons/HGBordeButton";

import Swiper from "react-native-swiper";
import OnboardingSlide from "@/components/onboarding/OnboardingSlide";

const Onboarding = () => {
    const [progress, setProgress] = useState(0);
    const swiperRef = useRef<Swiper>(null);

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.scrollBy(1, true);
        }
    };

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.scrollBy(-1, true);
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-background-main">
            <OnboardingAppBar
                onPress={handlePrev}
                showPrev={progress > 0}
                onSkip={() => {
                    if (swiperRef.current) {
                        swiperRef.current.scrollTo(4, true);
                    }
                }}
                showSkip={progress < 4}
            />
            <View className="h-[16px]" />

            <Swiper
                ref={swiperRef}
                loop={false}
                showsButtons={false}
                index={progress}
                onIndexChanged={(index) => setProgress(index)}
                activeDotColor="#84D1BF"
                dotStyle={{
                    width: 8,
                    height: 8,
                    backgroundColor: "#c0c0c0",
                    borderRadius: 4,
                    marginHorizontal: 4,
                }}
                activeDotStyle={{
                    width: 24,
                    height: 8,
                    backgroundColor: "#84D1BF",
                    borderRadius: 4,
                    marginHorizontal: 4,
                }}
                className="flex-1"
            >
                <View className="flex">
                    <OnboardingSlide
                        imageSrc={images.Onboarding1}
                        title="주사 맞을 시간엔 알람이 울려요"
                        description={
                            "정확한 시간에 맞아야 하는 주사\n허그가 챙길 테니 안심하세요."
                        }
                    />
                </View>

                <View className="flex">
                    <OnboardingSlide
                        imageSrc={images.Onboarding2}
                        title="여보, 오늘 하루 힘들었지?"
                        description={
                            "하루 동안 느낀 감정을 기록하고 남편과 공유해보세요."
                        }
                    />
                </View>
                <View className="flex">
                    <OnboardingSlide
                        imageSrc={images.Onboarding3}
                        title="우리 내일 병원 가는 날이지?"
                        description={
                            "복약 스케줄, 병원 방문 일정 등\n모든 시술 과정을 남편과 함께해요."
                        }
                    />
                </View>
                <View className="flex">
                    <OnboardingSlide
                        imageSrc={images.Onboarding4}
                        title="지원금, 얼마 남았을지 궁금할 땐?"
                        description={
                            "가계부 기능을 통해, 정부지원금과 개인 지출을\n구분하여 확인할 수 있어요."
                        }
                    />
                </View>
                <View className="flex">
                    <OnboardingSlide
                        imageSrc={images.Onboarding5}
                        title="함께하는 챌린지로 건강하게"
                        description={
                            "임신에 큰 영향을 주는 영양 상태와 호르몬 변화,\n챌린지를 통해 건강한 생활습관을 지켜나가요."
                        }
                    />
                </View>
            </Swiper>

            <View className="h-[136px] gap-2">
                {progress === 4 ? (
                    <>
                        <Pressable onPress={() => {}} className="w-full">
                            <Image
                                source={images.KakaoLoginBtn}
                                className="w-full h-[52px]"
                                resizeMode="contain"
                            />
                        </Pressable>
                        <Pressable onPress={() => {}} className="w-full">
                            <Image
                                source={images.KakaoLoginBtn}
                                className="w-full h-[52px]"
                                resizeMode="contain"
                            />
                        </Pressable>
                    </>
                ) : (
                    <HGBordeButton onPress={handleNext} title="다음" />
                )}
            </View>
        </SafeAreaView>
    );
};

export default Onboarding;
