import { AntDesign } from "@expo/vector-icons";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { FavouritesContext } from "../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFovourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((x) => x.placeId === restaurant.placeId);
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFovourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={28}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
