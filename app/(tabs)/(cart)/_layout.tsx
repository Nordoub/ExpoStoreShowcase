import { HEADER_OPTIONS } from "@/constants/Config";
import { Stack } from "expo-router";

export default function CartStack() {
  return (
    <Stack screenOptions={HEADER_OPTIONS}>
      <Stack.Screen name="cart" options={{ headerTitle: "Cart" }} />
    </Stack>
  );
}
