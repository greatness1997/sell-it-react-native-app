import { StatusBar } from "expo-status-bar";
import React, {useState} from "react"
import { StyleSheet, Text, View, SafeAreaView, Switch } from "react-native";
import MessageScreen from "./assets/screens/MessageScreen";
import Screen from "./assets/components/Screen";
import Icon from "./assets/components/Icon";
import ListItems from "./assets/components/ListItems";
import AccountScreen from "./assets/screens/AccountScreen";
import ListingScreen from "./assets/screens/ListingScreen";
import AppTextInput from "./assets/components/AppTextInput";
import AppPicker from "./assets/components/AppPicker";
import LoginScreen from "./assets/screens/LoginScreen";
import ListEditScreen from "./assets/screens/ListEditScreen";
//import { useDeviceOrientation, useDimensions } from "@react-native-community/hooks"



export default function App() {
  return <ListEditScreen />
}


