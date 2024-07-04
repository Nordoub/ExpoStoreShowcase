import { HEADER_OPTIONS } from "@/constants/Config";
import { Stack } from "expo-router";

export default function HomeStack() {
  return (
    <Stack screenOptions={HEADER_OPTIONS}>
      <Stack.Screen name="home" options={{ headerTitle: "Home" }} />
    </Stack>
  );
}
