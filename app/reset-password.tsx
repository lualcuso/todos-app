import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button,
} from "react-native";
import { Link } from "expo-router";
export default function Reset() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Reset Password</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              keyboardType="email-address"
              placeholder="you@email.com"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Token</Text>
            <TextInput keyboardType="number-pad" placeholder="123456" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>New Password</Text>
            <TextInput textContentType="password" placeholder="Password" />
          </View>

          <Button title="Submit" />
          <Link style={styles.link} href="/login">
            Cancel
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
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#555555",
  },
});
