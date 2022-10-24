import { createDrawerNavigator } from '@react-navigation/drawer';
import Home, {} from '../pages/Home'
import OQ from '../pages/OQ';
import QuemSomos, {} from '../pages/QuemSomos'
const Drawer = createDrawerNavigator();
export default function Routes(){
  return (
    <Drawer.Navigator useLegacyImplementation={true} >
      <Drawer.Screen name="QuemSomos" component={QuemSomos} />
      <Drawer.Screen name="O Que é Prematuridade?" component={OQ} />
    </Drawer.Navigator>
  );
}
