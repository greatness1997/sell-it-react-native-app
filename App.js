import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./assets/navigation/AuthNavigation";
import navigationTheme from "./assets/navigation/navigationTheme";
import AppNavigation from "./assets/navigation/AppNavigation";
import OfflineNotice from "./assets/components/OfflineNotice";
import AuthContext from "./assets/auth/context";
import authStorage from './assets/auth/storage'
// import jwtDecode from "jwt-decode";
import AppLoading from 'expo-app-loading'

// import * as Sentry from '@sentry/react-native'

export default function App() {
  const [user, setUser] = useState()
  const [ isReady, setIsReady ] = useState(false)


  const restoreData = async () => {
    try {
      const user = await authStorage.getData()
      if(user !== null) {
        setUser(JSON.parse(user))
      }
    } catch (error) {
      console.log(error)
    }
  }

  if(!isReady){
    return <AppLoading startAsync={restoreData} onError={(error) => console.log(error) } onFinish={() => setIsReady(true)}/>
  }

 
  return (
      <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
       {user ? <AppNavigation /> :  <AuthNavigation />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
