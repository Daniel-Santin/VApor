import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Aleitamento from '../pages/Aleitamento';
import Apoio from '../pages/Apoio';
import CalculadoraIG from '../pages/CalculadoraIG';
import CuidadoEmCasa from '../pages/CuidadoEmCasa';
import Desenvolvimento from '../pages/Desenvolvimento';
import OQ from '../pages/OQueEPrematuridade/index';
import QuemSomos, {} from '../pages/QuemSomos'
import Vacinas from '../pages/Vacinas';
import Home from '../pages/Home';
const Drawer = createDrawerNavigator();

import { colors } from '../themes/color'



const colorsMenu = [
  '#ff1493',
  '#993399',
]

export default function Routes(){
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="QuemSomos" component={QuemSomos} options={{headerShown: false}}/>
      <Stack.Screen name="O Que é Prematuridade?" component={OQ} options={{headerShown: false}}/>
      <Stack.Screen name="Calculadora IG" component={CalculadoraIG} options={{headerShown: false}}/>
      <Stack.Screen name="O cuidado em casa" component={CuidadoEmCasa} options={{headerShown: false}}/>
      <Stack.Screen name="Aleitamento" component={Aleitamento} options={{headerShown: false}}/>
      <Stack.Screen name="Vacinas" component={Vacinas} options={{headerShown: false}}/>
      <Stack.Screen name="Apoio" component={Apoio} options={{headerShown: false}}/>
      <Stack.Screen name="Desenvolvimento" component={Desenvolvimento} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
