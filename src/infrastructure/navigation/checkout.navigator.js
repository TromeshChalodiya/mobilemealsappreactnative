import React from "react";

import { CheckoutScreen } from "../../features/checkout/checkout.screen";
import { CheckoutSuccessScreen } from "../../features/checkout/checkoutSuccess.screen";
import { CheckoutErrorScreen } from "../../features/checkout/checkoutError.screen";
import { createStackNavigator } from "@react-navigation/stack";

const CheckoutStack = createStackNavigator();

export const CheckoutNavigator = ({ route, navigation }) => {
  return (
    <CheckoutStack.Navigator headerMode="none">
      <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
      <CheckoutStack.Screen
        name="CheckoutSuccess"
        component={CheckoutSuccessScreen}
      />
      <CheckoutStack.Screen
        name="CheckoutError"
        component={CheckoutErrorScreen}
      />
    </CheckoutStack.Navigator>
  );
};
