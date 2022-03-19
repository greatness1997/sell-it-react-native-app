import React from "react";
import { ImageBackground, StyleSheet, Image, View, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={2}
      resizeMode="contain"
      style={styles.background}
      source={require("../images/delivery.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../images/logo.png")} />
        <Text style={styles.text}>Sell Things you are done with</Text>
      </View>
      <View style={styles.btnContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate('Login')}/>
        <AppButton title="Register" color="secondary" onPress={() => navigation.navigate('Register')}/>
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
    width: "100%"
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 10
  },
});

export default WelcomeScreen;
