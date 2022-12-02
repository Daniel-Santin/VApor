import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import GraficodeCresc from "../pages/OQueEPrematuridade/GraficodeCresc";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Grafico" component={GraficodeCresc} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;