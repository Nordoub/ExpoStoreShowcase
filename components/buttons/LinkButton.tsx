import { Pressable, ViewStyle, StyleProp, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import {
  BORDER_RADIUSES,
  COLORS,
  FONT_WEIGHTS,
  SPACING,
} from "@/constants/Theme";
import Text from "../Text";
import { LinkProps } from "expo-router/build/link/Link";
import { Ionicons } from "@expo/vector-icons";
import { IoniconsNames } from "@/models/icons";
import Row from "../Row";

type Props = {
  title: string;
  // You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
  icon?: IoniconsNames;
  style?: StyleProp<ViewStyle>;
  color?: string;
} & LinkProps;

const LinkButton = ({
  title,
  icon,
  color = COLORS.primary,
  style,
  ...linkProps
}: Props) => {
  return (
    <Link asChild {...linkProps} style={[$.button, style]}>
      <Pressable>
        <Row style={$.row}>
          {icon && <Ionicons name={icon} size={24} color={color} />}
          <Text style={[$.text, { color }]}>{title}</Text>
        </Row>
        <Ionicons name="chevron-forward" size={24} color={color} />
      </Pressable>
    </Link>
  );
};

export default LinkButton;

const $ = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primaryLight,
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
