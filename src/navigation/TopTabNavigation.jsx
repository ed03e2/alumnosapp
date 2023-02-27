import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Calificaciones from '../screens/Calificaciones';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation =()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Calificaciones" component={Calificaciones} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
export default TopTabNavigation;