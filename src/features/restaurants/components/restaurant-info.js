import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components";

const Title = styled.Text`
  color: palevioletred;
  margin: 10px;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address = "100 random street",
    openingHours = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <>
      <View>
        <Card elevation={5} style={styles.card}>
          <Card.Cover
            key={name}
            style={styles.cardCover}
            source={{ uri: photos }}
          />
          <Title>{name}</Title>
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cardCover: {
    padding: 10,
    backgroundColor: "white",
  },
});
