import * as Linking from "expo-linking";
import Constants from "expo-constants";
import { COLORS, FONT_FAMILIES, FONT_WEIGHTS } from "./Theme";
import { NativeStackNavigatorProps } from "react-native-screens/lib/typescript/native-stack/types";
import { Platform, TextStyle } from "react-native";

export const APP_SCHEME = Linking.createURL("/");
export const APP_VERSION = Constants.expoConfig?.version;
export const API_BASE_URL = "https://fakestoreapi.com/";

const headerTextStyle: TextStyle = {
  fontFamily: FONT_FAMILIES.montserratSemiBold,
};

export const HEADER_OPTIONS: NativeStackNavigatorProps = {
  headerShown: true,
  headerLargeTitle: true,
  headerTintColor: COLORS.primary,
  headerBlurEffect: "regular",
  headerTransparent: Platform.select({
    ios: true,
    android: false,
  }),
  headerTitleStyle: headerTextStyle,
  headerLargeTitleStyle: headerTextStyle,
  headerStyle: {
    backgroundColor: Platform.select({
      ios: undefined,
      android: COLORS.background,
    }),
  },
};
