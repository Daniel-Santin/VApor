import { createDrawerNavigator } from '@react-navigation/drawer';
import Home, {} from '../pages/Home'
import QuemSomos, {} from '../pages/QuemSomos'
const Drawer = createDrawerNavigator();
export default function Routes(){
  return (
    <Drawer.Navigator useLegacyImplementation={true} >
      <Drawer.Screen name="QuemSomos" component={QuemSomos} />
    </Drawer.Navigator>
  );
}