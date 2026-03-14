import { View, Text, StyleSheet } from "react-native";

export default function CoursesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Courses</Text>
      <Text>V-Learn resources will be displayed here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", color: "#4CAF50" },
});
