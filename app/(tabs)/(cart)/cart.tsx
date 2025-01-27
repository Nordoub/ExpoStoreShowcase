import { Pressable, StyleSheet } from "react-native";
import React, { useCallback } from "react";
import { COLORS, SPACING } from "@/constants/Theme";
import Text from "@/components/Text";
import Screen from "@/components/Screen";
import Animated, {
  CurvedTransition,
  FadeInDown,
  FadeInUp,
  SlideOutDown,
  SlideOutUp,
} from "react-native-reanimated";
import Button from "@/components/buttons/Button";

const DATA = ["A", "B", "C"];
const DATA2 = ["E", "F"];

const Cart = () => {
  const [items, setItems] = React.useState(DATA);
  const [items2, setItems2] = React.useState(DATA2);
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const sortAlphabetically = (a: string, b: string) =>
    a.toLowerCase().localeCompare(b.toLowerCase());

  const renderItem = useCallback(
    // @ts-ignore
    ({ item }) => (
      <AnimatedPressable
        entering={FadeInDown}
        exiting={SlideOutDown}
        style={{
          backgroundColor: "cyan",
          padding: 10,
          borderWidth: 1,
          borderColor: COLORS.border,
        }}
        onPress={() => {
          setItems((items) => items.filter((i) => i !== item));
          setItems2((items) => [...items, item].sort(sortAlphabetically));
        }}
      >
        <Text>{item}</Text>
      </AnimatedPressable>
    ),
    [setItems]
  );
  const renderItem2 = useCallback(
    // @ts-ignore
    ({ item }) => (
      <AnimatedPressable
        entering={FadeInUp}
        exiting={SlideOutUp}
        style={{
          backgroundColor: "yellow",
          padding: 10,
          borderWidth: 1,
          borderColor: COLORS.border,
        }}
        onPress={() => {
          setItems2((items) => items.filter((i) => i !== item));
          setItems((items) => [...items, item].sort(sortAlphabetically));
        }}
      >
        <Text>{item}</Text>
      </AnimatedPressable>
    ),
    [setItems]
  );

  return (
    <Screen style={{ paddingBottom: 80 }}>
      <Button
        title={"Add one"}
        style={{ marginBottom: 12 }}
        onPress={() =>
          setItems((items) => [
            ...items,
            new Date().getMilliseconds().toString(),
          ])
        }
      />
      <Animated.FlatList
        itemLayoutAnimation={CurvedTransition}
        keyExtractor={(i) => i}
        data={items}
        contentContainerStyle={{
          gap: 12,
          padding: 12,
          flex: 1,
        }}
        renderItem={renderItem}
      />
      <Animated.FlatList
        itemLayoutAnimation={CurvedTransition}
        keyExtractor={(i) => i}
        data={items2}
        contentContainerStyle={{
          gap: 12,
          padding: 12,
          flex: 1,
        }}
        renderItem={renderItem2}
      />
    </Screen>
  );
};

export default Cart;

const $ = StyleSheet.create({
  scrollView: {
    padding: SPACING.m,
    backgroundColor: COLORS.background,
  },
  scrollViewContent: {
    gap: SPACING.m,
  },
});
