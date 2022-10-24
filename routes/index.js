import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home, {} from '../pages/Home'
import QuemSomos, {} from '../pages/QuemSomos'
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function Routes(){
  return (
    <Drawer.Navigator initialRouteName="QuemSomos">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="QuemSomos" component={QuemSomos} />
    </Drawer.Navigator>
  );
}