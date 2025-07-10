import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>홈스크린</Text>
      <CustomButton label="버튼" onPress={() => router.push("/auth")} />
    </SafeAreaView>
  );
}
