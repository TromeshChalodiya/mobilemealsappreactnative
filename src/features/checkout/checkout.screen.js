import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { Text } from "../../components/typography/text.component";
import { SafeArea } from "../../components/utility/safe-area.component";
import { CreditCardInput } from "./components/credit-card-component";
import { CartContext } from "../../components/services/cart/cart.context";
import { RestaurantInfoCard } from "../restaurants/components/restaurant-info";
import { Spacer } from "../../components/spacer/spacer.component";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
  PyamentProcessing,
} from "./components/checkout.styles";

import { payRequest } from "../../components/services/checkout/checkout.service";

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      navigation.navigate("CheckoutError", {
        error: "Please fill in a valid credit card",
      });
      return;
    }

    payRequest(card.id, sum, name)
      .then((result) => {
        setIsLoading(false);
        navigation.navigate("CheckoutSuccess");
        clearCart();
      })
      .catch((e) => {
        setIsLoading(false);
        navigation.navigate("CheckoutError", {
          error: e,
        });
        console.log(e);
      });
  };

  if (!cart || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Spacer position="top" size="xl" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      {isLoading && <PyamentProcessing />}
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${item} - ${price}`} />;
            })}
          </List.Section>
          <Spacer position="top" size="large">
            <Text>Total: {sum / 100}</Text>
          </Spacer>
        </Spacer>
        <NameInput label="Name" value={name} onChangeText={(t) => setName(t)} />
        <Spacer position="top" size="large">
          {name.length > 0 && (
            <CreditCardInput
              name={name}
              onSuccess={setCard}
              onError={() =>
                navigation.navigate("CheckoutError", {
                  error: "Something went wrong processing your credit card",
                })
              }
            />
          )}
        </Spacer>
        <Spacer position="top" size="xl" />
        <PayButton
          disabled={isLoading}
          icon="credit-card-outline"
          mode="contained"
          onPress={onPay}
        >
          Pay
        </PayButton>
        <Spacer position="top" size="large" />
        <ClearButton
          disabled={isLoading}
          icon="cart-off"
          mode="contained"
          onPress={clearCart}
        >
          Clear Cart
        </ClearButton>
      </ScrollView>
    </SafeArea>
  );
};
