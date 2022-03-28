import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import Screen from "../components/Screen";
import Card from "./Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicatorLoad from "../components/ActivityIndicatorLoad";

function ListingScreen({ navigation }) {
  const [listings, setListing] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    try {
      setLoading(true);
      const response = await listingsApi.getListings();
      setLoading(false);
      setError(false);
      //console.log(response.data);
      setListing(response.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(true);
    }
  };

  return (
    <Screen style={styles.screen}>
      <StatusBar style={colors.lightgrey} />
      {error && (
        <>
          <AppText>Could'nt get the products</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicatorLoad visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id}
        renderItem={({ item, index }) => (
          <Card
            key={index}
            title={item.title}
            subtitle={"$" + item.price}
            imageUrl={item.images}
            onPress={() => navigation.navigate("ListDetailsScreen", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightgrey,
    padding: 10,
  },
});

export default ListingScreen;
