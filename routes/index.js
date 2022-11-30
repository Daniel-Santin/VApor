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
    <Stack.Navigator useLegacyImplementation={true}
      >
      <Drawer.Screen name="Home" component={Home}/>
      <Stack.Screen name="QuemSomos" component={QuemSomos} />
      <Stack.Screen name="O Que é Prematuridade?" component={OQ} />
      <Stack.Screen name="Calculadora IG" component={CalculadoraIG} />
      <Stack.Screen name="O cuidado em casa" component={CuidadoEmCasa} />
      <Stack.Screen name="Aleitamento" component={Aleitamento} />
      <Stack.Screen name="Vacinas" component={Vacinas} />
      <Stack.Screen name="Apoio" component={Apoio} />
      <Stack.Screen name="Desenvolvimento" component={Desenvolvimento} />
    </Stack.Navigator>
  );
}
