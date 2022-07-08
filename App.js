import React from "react";
import { StatusBar as ExpoStatuBar } from "expo-status-bar";
import { LogBox } from "react-native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant-screen";

LogBox.ignoreLogs(["Remote debugger"]);

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatuBar style="auto" />
    </>
  );
}
