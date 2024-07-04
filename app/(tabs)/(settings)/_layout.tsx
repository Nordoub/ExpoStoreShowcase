import { HEADER_OPTIONS } from "@/constants/Config";
import { Stack } from "expo-router";

export default function SettingsStack() {
  return (
    <Stack screenOptions={HEADER_OPTIONS}>
      <Stack.Screen name="settings" options={{ headerTitle: "Settings" }} />
    </Stack>
  );
}
