import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Aleitamento from '../pages/Aleitamento';
import Apoio from '../pages/Apoio';
import CalculadoraIG from '../pages/CalculadoraIG';
import CuidadoEmCasa from '../pages/CuidadoEmCasa';
import Desenvolvimento from '../pages/Desenvolvimento';
import OQ from '../pages/OQueEPrematuridade/index';
import QuemSomos, {} from '../pages/QuemSomos'
import Vacinas from '../pages/Vacinas';
import Tabs from "./Tab";
import Routes from ".";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator   screenOptions={{
      drawerStyle: {
        backgroundColor: '#c6cbef',
        width: 240,
      },
    }}>
      <Drawer.Screen name="Home" component={Routes}options={{headerShown:false}}/>
      <Drawer.Screen name="QuemSomos" component={QuemSomos} options={{
        headerTitle:'',
        headerStyle:{backgroundColor: '#6A329F',}}}/>
      <Drawer.Screen name="O Que é Prematuridade?" component={OQ} options={{
        headerTitle:'',
        headerStyle:{backgroundColor: '#6A329F',}}}/>
      <Drawer.Screen name="Calculadora IG" component={CalculadoraIG} options={{
        headerTitle:'',
        headerStyle:{backgroundColor: '#6A329F',}}}/>
      <Drawer.Screen name="O cuidado em casa" component={CuidadoEmCasa} options={{
        headerTitle:'',
        headerStyle:{backgroundColor: '#6A329F',}}}/>
      <Drawer.Screen name="Aleitamento" component={Aleitamento} options={{
        headerTitle:'',
        headerStyle:{backgroundColor: '#6A329F',}}}/>
      <Drawer.Screen name="Vacinas" component={Vacinas} options={{
        headerTitle:'',
        headerStyle:{backgroundColor: '#6A329F',}}}/>
      <Drawer.Screen name="Apoio" component={Apoio} options={{
        headerTitle:'',
        headerStyle:{backgroundColor: '#6A329F',}}}/>
      <Drawer.Screen name="Desenvolvimento" component={Desenvolvimento} options={{
        headerTitle:'',
        headerStyle:{backgroundColor: '#6A329F',}}}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;