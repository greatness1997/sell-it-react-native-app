import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons"

function listItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
         <View style={styles.Container}>
            <MaterialCommunityIcons name="trash-can" size={40} color={colors.white}/>
         </View>
    </TouchableWithoutFeedback>
   
  )
}

const styles = StyleSheet.create({
  Container: {
    width: 60,
    backgroundColor: colors.danger,
    alignItems: "center",
    justifyContent: "center"
  },
});

export default listItemDeleteAction;
