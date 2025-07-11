import { router, useFocusEffect } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function MyScreen() {
  useFocusEffect(() => {
    router.replace("/auth");
  });

  return (
    <SafeAreaView>
      <Text>내정보 스크린</Text>
    </SafeAreaView>
  );
}
