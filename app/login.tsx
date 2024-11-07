import {
  Alert,
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button,
} from "react-native";
import { Link, router } from "expo-router";

import { setItem } from "@/utils/asyncStorage";

import { login } from "@/api/auth";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("luis.cubillo.soto@gmail.com");
  const [password, setPassword] = useState("060292");

  const onLogin = async () => {
    const { data } = await login(email, password);
    const { user } = data;
    if (user) {
      await setItem("token", user.token);
      router.replace("/");
    } else {
      Alert.alert("Error", "Error login");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              value={email}
              keyboardType="email-address"
              placeholder="you@email.com"
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              value={password}
              textContentType="password"
              placeholder="Password"
              onChangeText={setPassword}
            />
          </View>

          <Button title="Login" onPress={onLogin} />
          <Link style={styles.link} href="/forgot-password">
            Forgot your password?
          </Link>
          <Link style={styles.link} href="/register">
            Don't have an account? Register!
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  formContainer: {
    width: "100%",
  },
  inputContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
  },
  link: {
    marginTop: 10,
    textAlign: "right",
    textDecorationLine: "underline",
    color: "#555555",
  },
});
