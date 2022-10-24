import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './pages/routes';

export default function App() {
  return (
   <NavigationContainer>
    <StatusBar backgroundColor={'#7f7f7f'} barStyle="light-content"/>
    <Routes/>
   </NavigationContainer>
  );
}
