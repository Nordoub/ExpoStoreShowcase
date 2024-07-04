import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import Text from "@/components/Text";
import {
  BORDER_RADIUSES,
  COLORS,
  SPACING,
  TOUCHABLE_OPACITY,
} from "@/constants/Theme";

type Props = {
  title: string;
  isLoading?: boolean;
} & TouchableOpacityProps;

const Button = ({ title, isLoading, style, ...otherProps }: Props) => {
  const disabled = !!isLoading;

  return (
    <TouchableOpacity
      activeOpacity={TOUCHABLE_OPACITY}
      disabled={!!isLoading}
      {...otherProps}
      style={[$.button, !!isLoading && $.disabled, style]}
    >
      {isLoading ? (
        <ActivityIndicator color={COLORS.white} />
      ) : (
        <Text style={$.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const $ = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: SPACING.s,
    borderRadius: BORDER_RADIUSES.m,
  },
  text: {
    color: COLORS.white,
    lineHeight: SPACING.l,
  },
  disabled: {
    backgroundColor: COLORS.disabled,
  },
});
