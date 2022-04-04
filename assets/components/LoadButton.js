import React from "react";
import { ActivityIndicator, TouchableOpacity, StyleSheet } from "react-native";
import AppButton from "./AppButton";
import colors from "../config/colors";
//import { useFormikContext } from "formik";

function LoadButton() {
  return (
    <TouchableOpacity style={[styles.button]}>
        <ActivityIndicator animating={true} size="large" color={colors.white}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
        borderRadius: 20,
        marginVertical: 10
    }
});

export default LoadButton;
