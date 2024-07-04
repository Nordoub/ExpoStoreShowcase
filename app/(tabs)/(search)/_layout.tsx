import { HEADER_OPTIONS } from "@/constants/Config";
import { Stack } from "expo-router";

export default function SearchStack() {
  return (
    <Stack screenOptions={HEADER_OPTIONS}>
      <Stack.Screen
        name="search"
        options={{
          headerTitle: "Search",
          headerSearchBarOptions: {
            placeholder: "Search Test",
            hideWhenScrolling: false,
            autoFocus: true,
            onSearchButtonPress: (e) => {
              console.log(e.nativeEvent.text);
            },
            onChangeText: (e) => {
              console.log(e.nativeEvent.text);
            },
          },
        }}
      />
    </Stack>
  );
}
