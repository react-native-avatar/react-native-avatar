import { colors } from "@/constants";
import Foundation from "@expo/vector-icons/Foundation";
import { Link, Stack } from "expo-router";
export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: colors.BLACK,
        contentStyle: { backgroundColor: colors.WHITE },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "로그인",
          headerShown: true,
          headerLeft: () => (
            <Link href={"/"} replace style={{ paddingRight: 5 }}>
              <Foundation name="home" size={28} color="black" />
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: "이메일 로그인",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
