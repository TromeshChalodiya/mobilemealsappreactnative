import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantNavigator } from "./restaurant.navigator";
import { MapScreen } from "../../features/map/screen/map.screen";
import { CheckoutNavigator } from "./checkout.navigator.js";
import { SettingsNavigator } from "../../infrastructure/navigation/SettingsNavigator";

import { RestaurantContextProvider } from "../../components/services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../components/services/location/location.context";
import { FavouritesContextProvider } from "../../components/services/favourites/favourites.context";
import { CartContextProvider } from "../../components/services/cart/cart.context";
import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Checkout: "md-cart",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantContextProvider>
        <CartContextProvider>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: colors.brand.primary,
              inactiveTintColor: colors.brand.muted,
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
            <Tab.Screen name="Checkout" component={CheckoutNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </CartContextProvider>
      </RestaurantContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
