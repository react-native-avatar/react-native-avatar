import { colors } from "@/constants";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomButton from "./CustomButton";

interface FixedBottomCTAProps {
  label: string;
  onPress: () => void; //리턴값이 없는 함수
}

function FixedBottomCTA({ label, onPress }: FixedBottomCTAProps) {
  const inset = useSafeAreaInsets(); //ios 잘린부분 패딩 값으로 넣으면 깔끔

  return (
    <View style={[styles.fixed, { paddingBottom: inset.bottom || 12 }]}>
      <CustomButton label={label} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  fixed: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.GRAY_300,
    padding: 12,
    paddingHorizontal: 16,
  },
});

export default FixedBottomCTA;
