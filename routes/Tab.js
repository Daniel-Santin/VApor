import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home, {} from '../pages/Home'
import QuemSomos, {} from '../pages/QuemSomos'
const Tab = createBottomTabNavigator();
export default function Routes(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="QuemSomos" component={QuemSomos} />
    </Tab.Navigator>
  );
}
