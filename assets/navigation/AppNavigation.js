import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import * as Permissions from "expo-permissions";
// import * as Notifications from "expo-notifications";

import ListEditScreen from "../screens/ListEditScreen";
import AccountScreen from "../screens/AccountScreen";
import ListingButton from "./ListingButton";

import FeedNavigation from "./FeedNavigation";

const Tabs = createBottomTabNavigator();

const AppNavigation = () => {
  //     useEffect(() => {
  //         registerForPushNotification()
  //     }, [])

  //   const registerForPushNotification = async () => {
  //     try {
  //       const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //       if (!permission.granted) return;

  //       const token = await Notifications.getExpoPushTokenAsync();
  //       console.log(token);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Feed"
        component={FeedNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="PostProduct"
        component={ListEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <ListingButton onPress={() => navigation.navigate("PostProduct")} />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default AppNavigation;
