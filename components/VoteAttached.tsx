import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { Pressable, StyleSheet, View } from "react-native";
import InputField from "./InputField";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants";

function VoteAttached() {
  const { control, setValue, resetField } = useFormContext();
  const [isVoteAttached] = useWatch({ control, name: ["isVoteAttached"] });

  return (
    <>
      {isVoteAttached && (
        <InputField
          variant="outlined"
          editable={false}
          value="투표가 첨부되었습니다."
          rightChild={
            <Pressable
              onPress={() => {
                setValue("isVoteAttached", false);
                resetField("voteOptions");
              }}
            >
              <Ionicons name="close" size={20} color={colors.BLACK} />
            </Pressable>
          }
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({});

export default VoteAttached;
