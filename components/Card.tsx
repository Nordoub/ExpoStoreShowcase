import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import React, { PropsWithChildren } from "react";
import { COLORS, SPACING, BORDER_RADIUSES } from "@/constants/Theme";

type Props = {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const Card = ({ children, style, onPress }: PropsWithChildren<Props>) => {
  return (
    <Pressable style={[$.container, style]} onPressIn={onPress}>
      {children}
    </Pressable>
  );
};

export default Card;

const $ = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: SPACING.m,
    borderRadius: BORDER_RADIUSES.xl,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});
