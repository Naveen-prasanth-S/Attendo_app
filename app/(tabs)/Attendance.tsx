import { View, Text, StyleSheet } from "react-native";

export default function AttendanceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📅 Attendance</Text>
      <Text>Track attendance using Face Recognition (coming soon)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", color: "#FF6600" },
});
