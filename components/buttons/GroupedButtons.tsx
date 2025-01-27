import { StyleSheet, View } from "react-native";
import React from "react";
import { IoniconsNames } from "@/models/icons";
import ActionButton from "./ActionButton";
import Card from "../Card";
import { COLORS, FONT_FAMILIES, FONT_SIZES, SPACING } from "@/constants/Theme";
import Divider from "../Divider";
import Text from "../Text";

type Props = {
  title?: string;
  buttons: { title: string; iconLeft: IoniconsNames }[];
};

const ItemSeperator = () => <Divider style={{ marginHorizontal: SPACING.s }} />;

const GroupedButtons = ({ title, buttons }: Props) => {
  return (
    <View>
      {title && <Text style={$.title}>{title}</Text>}
      <Card style={$.card}>
        {buttons.map((s, index) => {
          const isLastItem = index + 1 === buttons.length;
          return (
            <View key={s.title + index + "view"}>
              <ActionButton
                key={s.title + index + "item"}
                title={s.title}
                iconLeft={s.iconLeft}
                style={$.option}
                onPress={() => console.log(s.title)}
              />
              {!isLastItem && <ItemSeperator />}
            </View>
          );
        })}
      </Card>
    </View>
  );
};

export default GroupedButtons;

const $ = StyleSheet.create({
  card: {
    padding: 0,
  },
  option: {
    borderWidth: 0,
    padding: 12,
  },
  title: {
    fontFamily: FONT_FAMILIES.montserratSemiBold,
    fontSize: FONT_SIZES.xl,
    margin: SPACING.xs,
    color: COLORS.primary,
  },
});
