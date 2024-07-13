import { COLORS, SPACING } from "@/constants/Theme";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import Animated, { FadeOut } from "react-native-reanimated";

type Props = {
  animationDelay?: number; // in miliseconds
  animationDuration?: number; // in miliseconds
  iconColor?: string;
  visible: boolean;
  size?: "large" | "small";
  style?: StyleProp<ViewStyle>;
};

const LoadingOverlay: React.FC<Props> = ({
  animationDelay = 0,
  animationDuration = 500,
  iconColor = COLORS.primary,
  visible = false,
  size = "large",
  style,
}) => {
  if (!visible) return null;

  return (
    <Animated.View
      style={[$.overlay, StyleSheet.absoluteFill, style]}
      exiting={FadeOut.delay(animationDelay).duration(animationDuration)}
    >
      <ActivityIndicator size={size} color={iconColor} />
    </Animated.View>
  );
};

export default LoadingOverlay;

const $ = StyleSheet.create({
  overlay: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.background,
    gap: SPACING.xs,
    zIndex: 999,
  },
});
