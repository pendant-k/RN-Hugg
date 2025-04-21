import { Stack } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function AuthLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="signup" />
        </Stack>
    );
}
