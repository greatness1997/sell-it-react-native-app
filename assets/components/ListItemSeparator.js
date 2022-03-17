import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function ListItemSeparator(props) {
  return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
  separator: {
    width: "95%",
    marginLeft: 10,
    height: 2,
    backgroundColor: colors.lightgrey
  },
});

export default ListItemSeparator;
