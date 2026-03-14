// app/(auth)/register.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const RegisterScreen = () => {
  const [school, setSchool] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!school || !id || !name || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, `${id}@teacher.attendo.com`, password);
      Alert.alert("Success", "Teacher registered successfully!");
      // TODO: redirect to login page
    } catch (error: any) {
      Alert.alert("Registration Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teacher SignUp</Text>
      <TextInput style={styles.input} placeholder="School / College" value={school} onChangeText={setSchool} />
      <TextInput style={styles.input} placeholder="ID" value={id} onChangeText={setId} />
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 15, marginHorizontal: 20 },
  button: { backgroundColor: "#FFA500", padding: 15, borderRadius: 5, marginHorizontal: 20 },
  btnText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});

export default RegisterScreen;
