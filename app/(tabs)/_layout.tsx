import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="index" options={{ title: "홈" }} />
            <Tabs.Screen name="(mypage)" options={{ title: "마이페이지" }} />
            <Tabs.Screen name="ledger" options={{ title: "가계부" }} />
        </Tabs>
    );
};

export default TabsLayout;
