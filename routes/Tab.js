import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Test from '../pages/Test'
const Tab = createBottomTabNavigator();
export default function Tabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Test" component={Test} />
    </Tab.Navigator>
  );
}
