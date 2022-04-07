import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListDetailsScreen from "../screens/ListDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigation = () => {
  return (
    <Stack.Navigator mode="modal" options={{ headerShown: false }}>
      <Stack.Screen
        name="ListingScreen"
        component={ListingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListDetailsScreen"
        component={ListDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigation;
