import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  SafeAreaView,
} from "react-native";
import React, { PropsWithChildren } from "react";
import { COLORS, SPACING } from "@/constants/Theme";

type Props = {
  style?: StyleProp<ViewStyle>;
};

const Screen = ({ children, style }: PropsWithChildren<Props>) => {
  return (
    <View style={$.container}>
      <SafeAreaView style={[$.safeAreaView, style]}>{children}</SafeAreaView>
    </View>
  );
};

export default Screen;

const $ = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  safeAreaView: {
    flex: 1,
  },
});
