import * as React from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

import Routes from './routes';
import DrawerNavigator from './routes/Draw';
import Home from './pages/Home';
import Tabs from './routes/Tab';



export default function App() {
  return (
   <NavigationContainer>
    <Tabs/>
   </NavigationContainer>
  );
}