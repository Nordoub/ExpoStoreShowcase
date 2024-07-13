import { Platform, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import Icon from "../Icon";
import {
  BORDER_RADIUSES,
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  SPACING,
} from "@/constants/Theme";
import Text from "../Text";
import { IoniconsNames } from "@/models/icons";
import { router, useRouter } from "expo-router";
import { BlurView } from "expo-blur";
import Card from "../Card";

// const paddingBottom = Platform.select({
//   ios: SPACING.xl,
//   android: 0,
// });
type Button = {
  icon: IoniconsNames;
  label: string;
  screen: string;
  color: string;
};
// const buttons: Button[] = [
//   { icon: "key", label: "Home", screen: "/home" },
//   { icon: "key", label: "Search", screen: "/search" },
//   { icon: "key", label: "Cart", screen: "/cart" },
//   { icon: "key", label: "Settings", screen: "/settings" },
// ];

const IconButton = ({ icon, label, color, screen }: Button) => (
  <Pressable
    style={$.iconButton}
    hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
    onPressIn={() => router.navigate(screen)}
  >
    <Icon name={icon} color={color} size={28} />
    <Text style={[$.label, { color }]}>{label}</Text>
  </Pressable>
);

// @ts-ignore

type Props = {
  state: { index: number };
};

const TabBar = ({ state: { index } }: Props) => {
  const iosDevice = Platform.OS === "ios";
  const onHomeScreen = index === 0;
  const onSearchScreen = index === 1;
  const onCartScreen = index === 2;
  const onSettingsScreen = index === 3;

  console.log(index);
  return (
    <View style={$.tabBar}>
      <Card style={$.card}>
        {iosDevice && (
          <BlurView
            style={[
              StyleSheet.absoluteFill,
              { overflow: "hidden", borderRadius: 6 },
            ]}
            intensity={80}
            // experimentalBlurMethod="dimezisBlurView"
          />
        )}
        <IconButton
          icon={onHomeScreen ? "home" : "home-outline"}
          color={onHomeScreen ? "blue" : "grey"}
          label={"Home"}
          screen={"/home"}
        />
        <IconButton
          icon={onSearchScreen ? "search" : "search-outline"}
          color={onSearchScreen ? "blue" : "grey"}
          label={"Search"}
          screen={"/search"}
        />
        <IconButton
          icon={onCartScreen ? "cart" : "cart-outline"}
          color={onCartScreen ? "blue" : "grey"}
          label={"Cart"}
          screen={"/cart"}
        />
        <IconButton
          icon={onSettingsScreen ? "settings" : "settings-outline"}
          color={onSettingsScreen ? "blue" : "grey"}
          label={"Settings"}
          screen={"/settings"}
        />
      </Card>
    </View>
  );
};

export default TabBar;

const $ = StyleSheet.create({
  tabBar: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    bottom: Platform.select({
      ios: SPACING.xl,
      android: SPACING.xs,
    }),
  },
  card: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    margin: SPACING.x2s,
    paddingHorizontal: SPACING.m,
    paddingVertical: SPACING.xs,
    borderRadius: SPACING.x1s,
    backgroundColor: Platform.select({
      ios: undefined,
      android: COLORS.background,
    }),
    width: "80%",
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.x2s,
  },
  label: {
    fontSize: FONT_SIZES.x3s,
    fontFamily: FONT_FAMILIES.montserratSemiBold,
  },
});
