import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import LottieView from "lottie-react-native";
import loading from "../animations/99844-loading.json";
import AppText from "./AppText";
import colors from "../config/colors";

const ActivityIndicatorLoad = ({ visible = false }) => {
  if (!visible) return null;

  return (
    // <LottieView autoPlay loop source={loading}/>
    
         <View style={styles.loading}>
              <ActivityIndicator animating={true} size="large" />
    {/* <Text style={styles.text}>Loading...</Text> */}
       </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.primary,
  },
});

export default ActivityIndicatorLoad;
