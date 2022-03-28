import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./assets/navigation/AuthNavigation";
import navigationTheme from "./assets/navigation/navigationTheme";
import AppNavigation from "./assets/navigation/AppNavigation";
import OfflineNotice from "./assets/components/OfflineNotice";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigation />
      </NavigationContainer>
    </>
  );
}
