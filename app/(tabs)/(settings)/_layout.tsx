import { Pressable, StyleSheet } from "react-native";
import Icon from "@/components/Icon";
import Text from "@/components/Text";
import { HEADER_OPTIONS } from "@/constants/Config";
import {
  COLORS,
  FONT_FAMILIES,
  FONT_WEIGHTS,
  SPACING,
} from "@/constants/Theme";
import useAuth from "@/hooks/use-auth";
import { Stack } from "expo-router";

export default function SettingsStack() {
  const { signOut } = useAuth();

  return (
    <Stack screenOptions={HEADER_OPTIONS}>
      <Stack.Screen
        name="settings"
        options={{
          headerTitle: "Settings",
          headerRight: () => (
            <Pressable style={$.container} onPressIn={signOut}>
              <Text style={$.text}>Sign out</Text>
              <Icon name={"log-out-outline"} size={35} color={COLORS.red} />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}

const $ = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: SPACING.xs,
    flexDirection: "row",
  },
  text: {
    color: COLORS.red,
    fontWeight: FONT_WEIGHTS.bold,
    fontFamily: FONT_FAMILIES.montserratSemiBold,
  },
});
