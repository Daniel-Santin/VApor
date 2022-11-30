import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '.';
import Aleitamento from '../pages/Aleitamento';
import Apoio from '../pages/Apoio';
import CalculadoraIG from '../pages/CalculadoraIG';
import CuidadoEmCasa from '../pages/CuidadoEmCasa';
import Desenvolvimento from '../pages/Desenvolvimento';
import Home from '../pages/Home';
import OQ from '../pages/OQueEPrematuridade/index';
import QuemSomos, {} from '../pages/QuemSomos'
import Vacinas from '../pages/Vacinas';
import DrawerNavigator from './Draw';
const Tab = createBottomTabNavigator();
function Tabs(){
  return (
    <Tab.Navigator   activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
      screenOptions={{
      tabBarActiveTintColor: '#e91e63',
    }}>
      <Tab.Screen name="Home" component={DrawerNavigator} options={{tabBarLabel:''}}/>
      <Tab.Screen name="QuemSomos" component={QuemSomos} />
      <Tab.Screen name="O Que é Prematuridade?" component={OQ} />
      <Tab.Screen name="Calculadora IG" component={CalculadoraIG} />
      <Tab.Screen name="Desenvolvimento" component={Desenvolvimento} />
    </Tab.Navigator>
  )
}
export default Tabs;