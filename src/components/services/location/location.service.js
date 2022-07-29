import camelize from "camelize";
import { locations } from "./location.mock";

// utilize below import when deploy firebase func.
import { host, isMock } from "../../../utils/env";

export const locationRequest = (searchTerm) => {
  // Below code is for connecting with live geo code api
  // return fetch(
  //   `http://localhost:5001/mealstogo-4ddc4/us-central1/geocode?city=${searchTerm}&mock=${isMock}`
  // ).then((res) => res.json());

  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
