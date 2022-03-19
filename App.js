import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './assets/navigation/AuthNavigation'
import navigationTheme from './assets/navigation/navigationTheme';
import AppNavigation from './assets/navigation/AppNavigation';



export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
       <AppNavigation />
    </NavigationContainer>
  )
  
}


