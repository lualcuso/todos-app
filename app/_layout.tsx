import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false }} name="login" />
      <Stack.Screen options={{ headerShown: false }} name="register" />
      <Stack.Screen options={{ headerShown: false }} name="forgot-password" />
      <Stack.Screen options={{ headerShown: false }} name="reset-password" />
      <Stack.Screen name="index" />
    </Stack>
  );
}
