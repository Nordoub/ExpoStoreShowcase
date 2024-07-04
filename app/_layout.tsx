import { COLORS, SPACING } from "@/constants/Theme";
import { Slot, Stack, useRouter, useSegments } from "expo-router";
import Notification from "@/components/Notification";
import * as SplashScreen from "expo-splash-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from "react-native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AuthProvider, { useAuthContext } from "@/context/AuthProvider";
import Toast from "react-native-toast-message";
import { isAuthenticated } from "@/utils/storage";

const CustomToast = ({ text1, onPress, type }: any) => (
  <Notification message={text1} onPress={onPress} type={type} />
);

const toastConfig = {
  success: CustomToast,
  error: CustomToast,
  info: CustomToast,
};

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();
  const router = useRouter();
  const segments = useSegments();

  // Make sure the right screen is shown whenever the auth state changes.
  useEffect(() => {
    const inTabsGroup = segments[0] !== "login";
    // If we are not logged in we show the login screen
    if (!isLoggedIn) return router.replace("/login");

    // If we are logged in but still in the login screen we redirect to home
    if (isLoggedIn && !inTabsGroup) {
      router.replace("/home");
    }
  }, [isLoggedIn]);

  return <Slot />;
};

export default function RootLayout() {
  const { top } = useSafeAreaInsets();
  const offset = Platform.select({
    android: top + SPACING.xs,
    ios: top,
  });

  // Load the fonts we want
  let [fontsLoaded, fontError] = useFonts({
    // SourceSansPro_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  // Hide splashscreen
  SplashScreen.hideAsync();

  return (
    <>
      <GestureHandlerRootView>
        <AuthProvider>
          <InitialLayout />
        </AuthProvider>
      </GestureHandlerRootView>
      <Toast
        config={toastConfig}
        visibilityTime={5000}
        topOffset={offset}
        onPress={Toast.hide}
      />
    </>
  );
}
