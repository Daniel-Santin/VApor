import * as React from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import Routes from "./Routes"
import Home from './pages/Home';

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
    <Stack.Screen
          name="Root"
          component={Routes}
          options={{ headerShown: false }}
        />
      
    </Stack.Navigator>
    <StatusBar backgroundColor={'#7f7f7f'} barStyle="light-content"/>
   </NavigationContainer>
  );
}