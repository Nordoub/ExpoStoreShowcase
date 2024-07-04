import * as Linking from "expo-linking";
import Constants from "expo-constants";
import { COLORS } from "./Theme";

export const APP_SCHEME = Linking.createURL("/");
export const APP_VERSION = Constants.expoConfig?.version;
export const API_BASE_URL = "https://fakestoreapi.com/";

export const HEADER_OPTIONS = {
  headerShown: true,
  headerLargeTitle: true,
  headerTintColor: COLORS.primary,
  headerLargeTitleShadowVisible: false,
  headerShadowVisible: false,
  headerStyle: { backgroundColor: COLORS.background },
};
