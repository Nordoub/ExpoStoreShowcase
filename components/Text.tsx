import { StyleSheet, Text as DefaultText, TextProps } from "react-native";
import React, { PropsWithChildren } from "react";
import { FONT_SIZES } from "@/constants/Theme";

export type FontType = "light" | "normal" | "bold";

type Props = {} & TextProps;

const Text = ({ children, style, ...textProps }: PropsWithChildren<Props>) => {
  return (
    <DefaultText style={[$.text, style]} {...textProps}>
      {children}
    </DefaultText>
  );
};

export default Text;

const $ = StyleSheet.create({
  text: {
    fontSize: FONT_SIZES.m,
  },
});
