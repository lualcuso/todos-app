import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getItem } from "@/utils/asyncStorage";
import { router } from "expo-router";

export default function Index() {
  const [token, setToken] = useState("");

  useEffect(() => {
    getItem("token").then((storedToken) => {
      if (storedToken) {
        setToken(storedToken);
      } else {
        router.replace("/login");
      }
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
