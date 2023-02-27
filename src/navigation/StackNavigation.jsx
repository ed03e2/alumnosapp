import Login from "../screens/Login";
import Settings from "../screens/Settings";
import TopTabNavigation from "./TopTabNavigation";

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigator=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TopTabNavigation" component={TopTabNavigation} />
    </Stack.Navigator>
  );
}
export default StackNavigator;