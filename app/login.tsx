import { StyleSheet } from "react-native";
import React from "react";
import Screen from "@/components/Screen";
import useAuth from "@/hooks/use-auth";
import Button from "@/components/buttons/Button";

const Login = () => {
  const { signIn, isLoading } = useAuth();

  return (
    <Screen style={$.screen}>
      <Button
        title="Sign in"
        onPressIn={() => signIn({ username: "mor_2314", password: "83r5^_" })}
        isLoading={isLoading}
      />
    </Screen>
  );
};

export default Login;

const $ = StyleSheet.create({
  screen: {
    justifyContent: "center",
  },
});
