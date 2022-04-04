import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItems from "../components/ListItems";

function ListDetailsScreen({ route }) {
  const listings = route.params;

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: listings.images[0].url }} />
      <View style={styles.textContainer}>
        <AppText style={styles.text}>{listings.title}</AppText>
        <AppText style={styles.price}>{"$" + listings.price}</AppText>
        <View style={styles.container}>
          <ListItems
            image={require("../images/avatar.png")}
            title="Otokina Greatness"
            subTitle="5 listing"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  image: {
    width: "100%",
    height: 300,
  },
  textContainer: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
    color: colors.secondary,
  },
});

export default ListDetailsScreen;
