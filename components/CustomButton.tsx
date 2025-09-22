import { colors } from "@/constants";
import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface CustomButtonProps extends PressableProps {
  label: string;
  size?: "medium" | "large";
  variant?: "standard" | "filled";
}

function CustomButton({
  label,
  size = "large",
  variant = "filled",
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        styles[size],
        styles[variant],
        props.disabled && styles.disabled,
        pressed && styles.pressed,
      ]}
      {...props}
    >
      <Text style={styles[`${variant}Text`]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  large: {
    width: "100%",
    height: 44,
  },
  medium: {},
  filled: {
    backgroundColor: colors.ORANGE_600,
  },
  standard: {},
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    backgroundColor: colors.GRAY_300,
  },
  standardText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.ORANGE_600,
  },
  filledText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.WHITE,
  },
});

export default CustomButton;
