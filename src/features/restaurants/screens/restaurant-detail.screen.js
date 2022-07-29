import React, { useState, useContext } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { OrderButton } from "../components/restaurant-info-style";
import { CartContext } from "../../../components/services/cart/cart.context";

export const DetailScreen = ({ navigation, route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpaned, setLunchExpaned] = useState(false);
  const [dinnerExpaned, setDinnerExpaned] = useState(false);
  const [drinksExpaned, setDrinksExpaned] = useState(false);

  const { addToCart } = useContext(CartContext);
  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Chia pudding" />
          <List.Item title="Oatmeal with Fruits" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpaned}
          onPress={() => setLunchExpaned(!lunchExpaned)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpaned}
          onPress={() => setDinnerExpaned(!dinnerExpaned)}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Tomotoes soup" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpaned}
          onPress={() => setDrinksExpaned(!drinksExpaned)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
        </List.Accordion>
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton
          icon="cash"
          mode="contained"
          onPress={() =>
            addToCart(
              { item: "special", price: 1299 },
              restaurant,
              navigation.navigate("Checkout")
            )
          }
        >
          Order spacial only $12.99!
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};
