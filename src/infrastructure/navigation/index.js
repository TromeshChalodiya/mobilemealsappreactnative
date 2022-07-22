import React, { useContext } from "react";
import { AccountNavigator } from "./account-navigator.js";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator";
import { AuthenticationContext } from "../../components/services/authentication/auth.context";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
