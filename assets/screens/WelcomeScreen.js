import React from "react";
import { ImageBackground, StyleSheet, Image, View, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={8}
      resizeMode="contain"
      style={styles.background}
      source={require("../images/delivery.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../images/logo.png")} />
      </View>
      <View style={styles.btnContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  btnContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
    top: "50%"
  },
});

export default WelcomeScreen;
