import { StyleSheet } from "react-native";
import React from "react";
import { SPACING } from "@/constants/Theme";
import { IoniconsNames } from "@/models/icons";
import ScrollableScreen from "@/components/ScrollableScreen";
import GroupedButtons from "@/components/buttons/GroupedButtons";

const SETTINGS: { title: string; iconLeft: IoniconsNames }[] = [
  { title: "Settings", iconLeft: "settings" },
  { title: "ItemText", iconLeft: "help-circle-outline" },
  { title: "ItemText", iconLeft: "help-circle-outline" },
  { title: "ItemText", iconLeft: "help-circle-outline" },
];

const Settings = () => {
  return (
    <ScrollableScreen>
      <GroupedButtons title="Orders" buttons={SETTINGS} />
      <GroupedButtons title="Configuration" buttons={SETTINGS} />
      <GroupedButtons title="Info" buttons={SETTINGS} />
      <GroupedButtons title="Legal" buttons={SETTINGS} />
    </ScrollableScreen>
  );
};

export default Settings;

const $ = StyleSheet.create({
  scrollView: {
    padding: SPACING.m,
  },
  scrollViewContent: {
    gap: SPACING.m,
  },
});
