import React, { useContext } from "react";
import { View, Text } from "react-native";

import { AppNavigator } from "./app.navigator";
import { AuthenticationContext } from "../../components/services/authentication/auth.context";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  console.log(isAuthenticated);
  return isAuthenticated ? (
    <AppNavigator />
  ) : (
    <View>
      <Text>Not Authenticated</Text>
    </View>
  );
};

// export const Navigation = () => {
//   return <AppNavigator />;
// };
