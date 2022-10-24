import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function Routes() {
    return (
        <Tab.Navigator>
          <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{ headerShown: false }}/>
        </Tab.Navigator>
    );
  }