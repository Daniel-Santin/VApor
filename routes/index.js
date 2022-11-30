import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import Aleitamento from '../pages/Aleitamento';
import Apoio from '../pages/Apoio';
import CalculadoraIG from '../pages/CalculadoraIG';
import CuidadoEmCasa from '../pages/CuidadoEmCasa';
import Desenvolvimento from '../pages/Desenvolvimento';
import OQ from '../pages/OQueEPrematuridade/index';
import QuemSomos, {} from '../pages/QuemSomos'
import Vacinas from '../pages/Vacinas';
const Drawer = createDrawerNavigator();

import { useState } from 'react';

import { colors } from '../themes/color'
import { Text } from 'react-native';

const colorsMenu = [
  '#ff1493',
  '#993399',
]

export default function Routes(){
  return (
    <Drawer.Navigator useLegacyImplementation={true} screenOptions={{
      drawerActiveBackgroundColor: colors.darkPink,
      drawerActiveTintColor: '#fff',
      headerStyle: { backgroundColor: '#7d46de', },
      headerTitleStyle: { color: '#7d46de', }
    }}
    >
      <Drawer.Screen name="QuemSomos" component={QuemSomos} />
      <Drawer.Screen name="O Que é Prematuridade?" component={OQ} />
      <Drawer.Screen name="Calculadora IG" component={CalculadoraIG} />
      <Drawer.Screen name="O cuidado em casa" component={CuidadoEmCasa} />
      <Drawer.Screen name="Aleitamento" component={Aleitamento} />
      <Drawer.Screen name="Vacinas" component={Vacinas} />
      <Drawer.Screen name="Apoio" component={Apoio} />
      <Drawer.Screen name="Desenvolvimento" component={Desenvolvimento} />
    </Drawer.Navigator>
  );
}
