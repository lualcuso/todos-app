import { Stack, router } from "expo-router";
import { Alert, Button } from "react-native";
import { deleteItem } from "@/utils/asyncStorage";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false }} name="login" />
      <Stack.Screen options={{ headerShown: false }} name="register" />
      <Stack.Screen options={{ headerShown: false }} name="forgot-password" />
      <Stack.Screen options={{ headerShown: false }} name="reset-password" />
      <Stack.Screen
        options={{
          headerRight: () => (
            <Button
              onPress={() => {
                deleteItem("token").then(() => {
                  Alert.alert("Logout", "Logout Successfully", [
                    {
                      text: "OK",
                      onPress: () => {
                        router.replace("/login");
                      },
                    },
                  ]);
                });
              }}
              title="Logout"
            />
          ),
        }}
        name="index"
      />
    </Stack>
  );
}
