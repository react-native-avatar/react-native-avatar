import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Pressable, StyleSheet, View } from "react-native";
import InputField from "./InputField";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants";

interface VoteInputProps {
  index: number;
  onRemove: () => void;
}

function VoteInput({ index, onRemove }: VoteInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={`voteOptions.${index}.content`}
      rules={{
        validate: (data: string) => {
          if (data.length === 0) {
            return "내용을 입력해주세요.";
          }
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          variant="standard"
          value={value}
          onChangeText={onChange}
          error={error?.message}
          rightChild={
            <Pressable onPress={onRemove}>
              <Ionicons name="close" size={20} color={colors.BLACK} />
            </Pressable>
          }
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});

export default VoteInput;
