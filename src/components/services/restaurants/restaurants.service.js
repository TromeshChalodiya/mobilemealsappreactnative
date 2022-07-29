import { mockImages, mocks } from "./mock";
import camelize from "camelize";

// utilize below import when deploy firebase func.
import { host, isMock } from "../../../utils/env";

export const restaurantsRequest = (location) => {
  // return fetch(
  //   `http://localhost:5001/mealstogo-4ddc4/us-central1/placesNearby?location=${location}&mock=${isMock}`
  // ).then((res) => {
  //   res.json();
  // });

  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
