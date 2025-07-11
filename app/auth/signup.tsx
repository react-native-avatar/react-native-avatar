import FixedBottomCTA from "@/components/FixedBottomCTA";
import InputField from "@/components/InputField";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function SignupScreen() {
  const [signupValues, setSignupValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChangeInput = (text: string, name: string) => {
    setSignupValues((prev) => {
      return { ...prev, [name]: text };
    });
  };

  const handleSubmit = () => {
    if (signupValues.email.length === 0) {
      setError((prev) => ({ ...prev, email: "이메일을 입력해주세요." }));
    }
  };

  return (
    <>
      <View style={styles.container}>
        <InputField
          label="이메일"
          placeholder="이메일을 입력해주세요."
          value={signupValues.email}
          onChangeText={(text) => handleChangeInput(text, "email")}
          error={error.email}
        />
        <InputField
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          value={signupValues.password}
          onChangeText={(text) => handleChangeInput(text, "password")}
        />
        <InputField
          label="비밀번호 확인"
          placeholder="비밀번호를 입력해주세요."
          value={signupValues.passwordConfirm}
          onChangeText={(text) => handleChangeInput(text, "passwordConfirm")}
        />
      </View>
      <FixedBottomCTA label="회원가입하기" onPress={handleSubmit} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});
