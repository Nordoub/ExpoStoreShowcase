import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import { SPACING } from "@/constants/Theme";

const search = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={$.scrollView}
      contentContainerStyle={$.scrollViewContent}
    >
      {Array.from({ length: 50 }, (_, index) => index + 1).map((index) => (
        <Text key={index}>search</Text>
      ))}
      <Text>search</Text>
    </ScrollView>
  );
};

export default search;

const $ = StyleSheet.create({
  scrollView: {
    padding: SPACING.m,
  },
  scrollViewContent: {
    gap: SPACING.m,
  },
});
