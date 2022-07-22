import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantNavigator } from "./restaurant.navigator";
import { MapScreen } from "../../features/map/screen/map.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant-sharp",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: "blue",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);
