import { Stack } from "expo-router";
import { SafeAreaView, Text } from "react-native";

function AuthLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="onboarding" />
            <Stack.Screen name="signup" />
        </Stack>
    );
}

export default AuthLayout;
