// app/(auth)/login.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const LoginScreen = () => {
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [idOrRoll, setIdOrRoll] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!idOrRoll || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      let email = role === "student"
        ? `${idOrRoll}@student.attendo.com`
        : `${idOrRoll}@teacher.attendo.com`;

      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", `${role} logged in successfully!`);
      // TODO: navigate to your Tab layout
    } catch (error: any) {
      Alert.alert("Login Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendo Login</Text>

      {/* Role selector */}
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[styles.roleBtn, role === "student" && styles.activeRole]}
          onPress={() => setRole("student")}
        >
          <Text>Student</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleBtn, role === "teacher" && styles.activeRole]}
          onPress={() => setRole("teacher")}
        >
          <Text>Teacher</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder={role === "student" ? "Roll No / Name" : "ID / Name"}
        value={idOrRoll}
        onChangeText={setIdOrRoll}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  roleContainer: { flexDirection: "row", justifyContent: "center", marginBottom: 20 },
  roleBtn: { padding: 10, borderWidth: 1, marginHorizontal: 10, borderRadius: 5 },
  activeRole: { backgroundColor: "#FFA500" },
  input: { borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 15, marginHorizontal: 20 },
  button: { backgroundColor: "#FFA500", padding: 15, borderRadius: 5, marginHorizontal: 20 },
  btnText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});

export default LoginScreen;
