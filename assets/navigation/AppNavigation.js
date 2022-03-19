import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ListEditScreen from '../screens/ListEditScreen'
import AccountScreen from '../screens/AccountScreen'
import ListingButton from './ListingButton';

import FeedNavigation from './FeedNavigation';

const Tabs = createBottomTabNavigator()

const AppNavigation = () => {
    return(
        <Tabs.Navigator>
            <Tabs.Screen 
                name='Feed' 
                component={FeedNavigation}
                options={{  
                    headerShown: false,
                    tabBarIcon: ({ color, size }) =>
                     <MaterialCommunityIcons 
                        name="home"
                        color={color}
                        size={size}
                    />
                    
                }}
            />
            <Tabs.Screen 
                name='ListingEdit' 
                component={ListEditScreen}
                options={({ navigation }) => ({ 
                    tabBarButton: () => (
                        <ListingButton onPress={() => navigation.navigate("ListingEdit")}/>
                    ),
                    tabBarIcon: ({ color, size }) =>
                     <MaterialCommunityIcons 
                        name="plus-circle"
                        color={color}
                        size={size}
                    />
                })}
            />
            <Tabs.Screen 
                name='Account' 
                component={AccountScreen}
                options={{  
                    tabBarIcon: ({ color, size }) =>
                     <MaterialCommunityIcons 
                        name="account"
                        color={color}
                        size={size}
                    />
                }}
            />
        </Tabs.Navigator>
    )
}

export default AppNavigation