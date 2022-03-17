import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import colors from "../config/colors"

function AppButton({ title, onPress, color = "primary" }) {
    return (
       <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
           <Text style={styles.btnText}>{title}</Text>
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
    },
    btnText: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.white,
        textTransform: "uppercase"
    },
});

export default AppButton;