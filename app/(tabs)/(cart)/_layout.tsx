import { HEADER_OPTIONS } from "@/constants/Config";
import { Stack } from "expo-router";

export default function CartStack() {
  return (
    <Stack>
      <Stack.Screen name="cart" options={{ headerTitle: "Cart" }} />
    </Stack>
  );
}
