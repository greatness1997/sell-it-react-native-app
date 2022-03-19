import React from "react";
import { View, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";

function Card({ title, subtitle, image, onPress }) {
  return (
   <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.textComntainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  textComntainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontWeight: "bold",
  },
  subtitle: {
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default Card;
