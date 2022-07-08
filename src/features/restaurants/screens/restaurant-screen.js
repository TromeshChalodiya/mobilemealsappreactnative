import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfo } from "../components/restaurant-info";

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.textInput}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.listItem}>
          <RestaurantInfo />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  textInput: {
    padding: 20,
    fontSize: 20,
  },
  listItem: {
    flex: 1,
    padding: 20,
  },
});
