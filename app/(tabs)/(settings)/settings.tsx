import { FlatList, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { COLORS, SPACING } from "@/constants/Theme";
import useAuth from "@/hooks/use-auth";
import ActionButton from "@/components/buttons/ActionButton";
import Screen from "@/components/Screen";
import Card from "@/components/Card";
import Divider from "@/components/Divider";
import { IoniconsNames } from "@/models/icons";

const ItemSeperator = () => <Divider style={{ marginHorizontal: SPACING.s }} />;

const SETTINGS: { title: string; iconLeft: IoniconsNames }[] = [
  { title: "Settings", iconLeft: "settings" },
  { title: "ItemText", iconLeft: "help-circle-outline" },
];

const Settings = () => {
  const { signOut } = useAuth();

  return (
    <Screen>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={$.scrollView}
        contentContainerStyle={$.scrollViewContent}
      >
        <Card style={$.card}>
          <FlatList
            data={SETTINGS}
            renderItem={({ item: { title, iconLeft } }) => (
              <ActionButton
                title={title}
                iconLeft={iconLeft}
                style={$.option}
                onPress={() => console.log(title)}
              />
            )}
            ItemSeparatorComponent={ItemSeperator}
          />
        </Card>
      </ScrollView>
      <ActionButton
        title="Sign out"
        iconLeft="log-out-outline"
        color={COLORS.white}
        onPressIn={signOut}
        style={$.signOut}
      />
    </Screen>
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
  card: {
    padding: 0,
  },
  option: {
    borderWidth: 0,
    padding: 12,
  },
  signOut: {
    backgroundColor: COLORS.orange,
    margin: SPACING.m,
    borderColor: COLORS.darkOrange,
    borderWidth: 1,
  },
});
