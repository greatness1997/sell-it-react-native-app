import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar"

import Screen from "../components/Screen";
import Card from "./Card";
import colors from "../config/colors";

const listData = [
  {
    id: 1,
    title: "G-Wagon",
    price: 100000,
    image: require("../images/g-wagon.jpg.jpg"),
  },
  {
    id: 2,
    title: "Lanborgini",
    price: 250000,
    image: require("../images/lanborgini.jpg.jpg"),
  },
  {
    id: 3,
    title: "Rolce Royce",
    price: 500000,
    image: require("../images/rolce-royce.jpg.jpg"),
  },
  {
    id: 4,
    title: "Bugatti Chiron",
    price: 4000000,
    image: require("../images/bugatti-chiron.jpg.jpg"),
  },
];

function ListingScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
        <StatusBar style={colors.lightgrey}/>
      <FlatList
        data={listData}
        keyExtractor={(listData) => listData.id}
        renderItem={({ item }) => (
          <Card 
            title={item.title} 
            subtitle={"$" + item.price} 
            image={item.image} 
            onPress={() => navigation.navigate('ListDetailsScreen', item)}  
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.lightgrey,
        padding: 10
    }
});

export default ListingScreen;
