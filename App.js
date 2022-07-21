import React from "react";
import { StatusBar as ExpoStatuBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { LogBox } from "react-native";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { initializeApp } from "firebase/app";

import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme/index";
import { RestaurantContextProvider } from "./src/components/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/components/services/location/location.context";
import { FavouritesContextProvider } from "./src/components/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/components/services/authentication/auth.context";

const firebaseConfig = {
  apiKey: "AIzaSyDCy9AxFdpKzYJVckXZVwGIvqtBKSw9ByY",
  authDomain: "mealstogo-4ddc4.firebaseapp.com",
  projectId: "mealstogo-4ddc4",
  storageBucket: "mealstogo-4ddc4.appspot.com",
  messagingSenderId: "844009318847",
  appId: "1:844009318847:web:5c9029f3d03505dea7590a",
};

initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latodLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latodLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatuBar style="auto" />
    </>
  );
}
