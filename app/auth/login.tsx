import InputField from "@/components/InputField";
import { StyleSheet, View } from "react-native";

export default function loginScreen() {
  return (
    <View style={styles.container}>
      <InputField label="이메일" placeholder="이메일을 입력해주세요." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
});
