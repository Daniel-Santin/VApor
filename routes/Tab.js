import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
    <Tab.Navigator>
      <Tab.Screen name="Home" component={DrawerNavigator} options={{
        headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="O Que é Prematuridade?" component={OQ} options={{headerShown: false}}/>
      <Tab.Screen name="Calculadora IG" component={CalculadoraIG} options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calculator" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Desenvolvimento" component={Desenvolvimento} options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="email-open" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  )
}
export default Tabs;