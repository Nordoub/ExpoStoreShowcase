import TabBar from "@/components/navigation/TabBar";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useAuthContext } from "@/context/AuthProvider";
import { BlurView } from "expo-blur";
import { Redirect, Tabs } from "expo-router";
import { Platform, StyleSheet } from "react-native";

export default function TabsStack() {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        lazy: true,
        tabBarBackground: () =>
          Platform.select({
            ios: <BlurView intensity={100} style={StyleSheet.absoluteFill} />,
            android: undefined,
          }),
        tabBarStyle: { position: "absolute" },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(search)"
        options={{
          title: "Search",
          headerShown: false,
          // tabBarBackground: () =>
          //   Platform.select({
          //     ios: <BlurView intensity={100} style={StyleSheet.absoluteFill} />,
          //     android: undefined,
          //   }),
          // tabBarStyle: { position: "absolute" },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "search" : "search-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(cart)"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "cart" : "cart-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(settings)"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "settings" : "settings-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
