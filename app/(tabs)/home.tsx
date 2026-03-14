// app/(tabs)/home.tsx
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold mb-6">Attendo + V-Learn</Text>

      <TouchableOpacity
        className="bg-orange-500 p-4 rounded-2xl mb-4"
        onPress={() => router.push("/Attendance")}
      >
        <Text className="text-white text-lg">📅 Attendance</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-2xl mb-4"
        onPress={() => router.push("/studyhub")}
      >
        <Text className="text-white text-lg">📚 Study Hub</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-gray-700 p-4 rounded-2xl"
        onPress={() => router.push("/Profile")}
      >
        <Text className="text-white text-lg">👤 Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
