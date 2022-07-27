import React, { useState, useEffect, useContext, createContext } from "react";

import { restaurantsRequest, restaurantTransform } from "./restaurants.service";
import { LocationContext } from "../location/location.context";
export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    // remove setTimeout when connect with firebase func.
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantTransform)
        .then((restaurantResults) => {
          setIsLoading(false);
          setRestaurants(restaurantResults);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 1500);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider
      value={{ restaurants: restaurants, isLoading, error }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
