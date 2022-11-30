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
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Routes} />
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

export default DrawerNavigator;