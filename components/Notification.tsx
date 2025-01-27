import { Pressable, StyleSheet, View } from "react-native";
import React, { FC, memo } from "react";
import SuccessIcon from "@/assets/icons/success.svg";
import ErrorIcon from "@/assets/icons/error.svg";
import InfoIcon from "@/assets/icons/info.svg";

import Text from "./Text";

import { SvgProps } from "react-native-svg";
import {
  COLORS,
  SPACING,
  BORDER_RADIUSES,
  FONT_SIZES,
  FONT_WEIGHTS,
} from "@/constants/Theme";

/* This component is used by react-native-toast-message to display notifications.
    you can import and call any of the following functions if you want to show a notification message:
    * showSuccessToast(message: string)
    * showErrorToast(message: string)
    * showInfoToast(message: string)
*/

type Type = "success" | "error" | "info";

type Value = {
  icon: FC<SvgProps>;
  color: string;
  backgroundColor: string;
};

type Props = {
  onPress?: () => void;
  message: string;
  type: Type;
};

const ICON_SIZE = 25;

const getValues = (type: Type): Value => {
  switch (type) {
    case "success":
      return {
        icon: SuccessIcon,
        color: COLORS.success,
        backgroundColor: COLORS.successBackground,
      };
    case "error":
      return {
        icon: ErrorIcon,
        color: COLORS.error,
        backgroundColor: COLORS.errorBackground,
      };
    default:
      return {
        icon: InfoIcon,
        color: COLORS.info,
        backgroundColor: COLORS.infoBackground,
      };
  }
};

const Notification = ({ onPress, message, type }: Props) => {
  const {
    icon: Icon,
    color,
    backgroundColor,
  } = React.useMemo(() => getValues(type), [type]);

  return (
    <Pressable
      style={[$.container, { borderColor: color, backgroundColor }]}
      onPress={onPress}
    >
      <Icon
        height={ICON_SIZE}
        width={ICON_SIZE}
        color={color}
        style={{ position: "absolute", left: SPACING.x1s }}
      />
      <View style={$.textContainer}>
        <Text style={[$.text, { color }]} numberOfLines={3}>
          {message}
        </Text>
      </View>
    </Pressable>
  );
};

export default memo(Notification);

const $ = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    alignItems: "center",
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.x1s,
    flexDirection: "row",
    gap: SPACING.xs,
    width: "95%",
    borderRadius: BORDER_RADIUSES.m,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  text: {
    fontSize: FONT_SIZES.s,
    fontWeight: FONT_WEIGHTS.bold,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
});
