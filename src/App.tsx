import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { colors } from "../themes/tailwind.theme";

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-primary m-2 text-center">
        This should display in the primary color (blue) because of the className
        text-primary, but it doesn't work.
      </Text>
      <Text
        style={{ color: colors.primary.DEFAULT }}
        className="text-center m-2"
      >
        Importing the color directly from the theme and applying it through a
        style object, works.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
