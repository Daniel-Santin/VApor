import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import GraficodeCresc from "../pages/OQueEPrematuridade/GraficodeCresc";
import complicações from "../pages/OQueEPrematuridade/complicações";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Grafico" component={GraficodeCresc} />
      <Drawer.Screen name="Contact" component={complicações} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;