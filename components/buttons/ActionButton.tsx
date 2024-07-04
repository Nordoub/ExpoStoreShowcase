import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import React from "react";
import {
  BORDER_RADIUSES,
  COLORS,
  FONT_WEIGHTS,
  SPACING,
} from "@/constants/Theme";
import Text from "../Text";
import { Ionicons } from "@expo/vector-icons";
import { IoniconsNames } from "@/models/icons";
import Row from "../Row";

type Props = {
  title: string;
  // You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
  iconLeft?: IoniconsNames;
  iconRight?: IoniconsNames;
  color?: string;
  style?: StyleProp<ViewStyle>;
} & PressableProps;

const ActionButton = ({
  title,
  iconLeft,
  iconRight = "chevron-forward",
  color = COLORS.primary,
  style,
  ...pressableProps
}: Props) => {
  return (
    <Pressable style={[$.button, style]} {...pressableProps}>
      <Row style={$.row}>
        {iconLeft && <Ionicons name={iconLeft} size={24} color={color} />}
        <Text style={[$.text, { color }]}>{title}</Text>
      </Row>
      {iconRight && <Ionicons name={iconRight} size={24} color={color} />}
    </Pressable>
  );
};

export default ActionButton;

const $ = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    padding: SPACING.s,
    borderRadius: BORDER_RADIUSES.xl,
  },
  text: {
    fontWeight: FONT_WEIGHTS.bold,
  },
  row: {
    gap: SPACING.xs,
    alignItems: "center",
  },
});
