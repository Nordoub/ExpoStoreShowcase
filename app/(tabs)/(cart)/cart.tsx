import { ScrollView, StyleSheet, Text } from "react-native";
import React from "react";
import { SPACING } from "@/constants/Theme";

const Cart = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={$.scrollView}
      contentContainerStyle={$.scrollViewContent}
    >
      <Text>Cart</Text>
    </ScrollView>
  );
};

export default Cart;

const $ = StyleSheet.create({
  scrollView: {
    padding: SPACING.m,
  },
  scrollViewContent: {
    gap: SPACING.m,
  },
});
