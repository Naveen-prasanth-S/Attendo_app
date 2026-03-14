import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Attendo + V-Learn 🚀</Text>
      <Text style={styles.subtitle}>
        Manage Attendance & Access Courses in one place
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF6600",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: "#333",
  },
});
