import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useCallback } from "react";
import { COLORS, FONT_SIZES, SPACING } from "@/constants/Theme";
import ScrollableScreen from "@/components/ScrollableScreen";
import Text from "@/components/Text";
import Screen from "@/components/Screen";
import Card from "@/components/Card";
import Animated, {
  CurvedTransition,
  Easing,
  EntryExitTransition,
  FadeInDown,
  FadeInUp,
  LinearTransition,
  SlideInDown,
  SlideInLeft,
  SlideInUp,
  SlideOutDown,
  SlideOutUp,
  useSharedValue,
  withTiming,
  ZoomInDown,
  ZoomInUp,
  ZoomOutDown,
  ZoomOutUp,
} from "react-native-reanimated";
import Button from "@/components/buttons/Button";
import Divider from "@/components/Divider";

const { height, width } = Dimensions.get("window");

// const DATA = ["test", "test2", "test3", "test4", "test5", "test6"];
// const DATA2 = ["test7", "test8", "test9", "test10", "test11", "test12"];
const DATA = ["A", "B", "C", "D"];
const DATA2 = ["E", "F", "G", "H"];

const Cart = () => {
  const fontSize = useSharedValue<number>(FONT_SIZES.x2l);
  const titleX = useSharedValue<number>(SPACING.m);
  const titleY = useSharedValue<number>(SPACING.xxl);
  const [items, setItems] = React.useState(DATA);
  const [items2, setItems2] = React.useState(DATA2);
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const sortAlphabetically = (a: string, b: string) =>
    a.toLowerCase().localeCompare(b.toLowerCase());

  const renderItem = useCallback(
    // @ts-ignore
    ({ item }) => (
      <AnimatedPressable
        // .easing(Easing.inOut(Easing.sin))
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
  const { height: screenHeight } = useWindowDimensions();
  const height = screenHeight * 0.6;

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
          // backgroundColor: "white",
          flex: 1,
        }}
        renderItem={renderItem}
      />
      {/* <Divider style={{ marginVertical: 12, borderWidth: 3 }} /> */}
      <Animated.FlatList
        itemLayoutAnimation={CurvedTransition}
        keyExtractor={(i) => i}
        data={items2}
        contentContainerStyle={{
          gap: 12,
          padding: 12,
          // backgroundColor: "orange",
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
