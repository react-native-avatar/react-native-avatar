import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Pressable>
        <Text>홈스크린</Text>
      </Pressable>
    </SafeAreaView>
  );
}
