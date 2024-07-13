import { ScrollView, ScrollViewProps, StyleSheet } from "react-native";
import React, { PropsWithChildren, useMemo } from "react";
import { SPACING, COLORS } from "@/constants/Theme";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const ScrollableScreen = ({
  children,
  ...props
}: PropsWithChildren<ScrollViewProps>) => {
  const tabHeight = useBottomTabBarHeight();

  const paddingStyle = useMemo(
    () => ({
      paddingBottom: tabHeight,
    }),
    [tabHeight]
  );

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={[$.scrollView, paddingStyle]}
      contentContainerStyle={$.scrollViewContent}
      {...props}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollableScreen;

const $ = StyleSheet.create({
  scrollView: {
    padding: SPACING.m,
    backgroundColor: COLORS.background2,
  },
  scrollViewContent: {
    gap: SPACING.m,
  },
});
