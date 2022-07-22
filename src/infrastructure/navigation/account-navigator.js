import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreen } from "../../features/account/screen/account-screen";
import { LoginScreen } from "../../features/account/screen/login-screen";
import { SignUpScreen } from "../../features/account/screen/signup-screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignUpScreen} />
  </Stack.Navigator>
);
