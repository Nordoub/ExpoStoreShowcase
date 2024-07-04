import { StyleSheet, View, ViewProps } from "react-native";
import React, { PropsWithChildren } from "react";

const Row = ({ children, style }: PropsWithChildren<ViewProps>) => {
  return <View style={[$.row, style]}>{children}</View>;
};

export default Row;

const $ = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});
