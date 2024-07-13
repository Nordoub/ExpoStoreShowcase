import { StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { IoniconsNames } from "@/models/icons";

type IconProps = {
  name: IoniconsNames;
  color?: string;
  size?: number;
};
const Icon = ({ name, color, size = 24 }: IconProps) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default Icon;

const styles = StyleSheet.create({});
