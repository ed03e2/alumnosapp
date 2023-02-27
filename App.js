import React from "react";
import 'react-native-gesture-handler';
import { styles } from "./src/theme/theme";
import {AuthProvider} from "./src/context/AlumnoContext.jsx";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import StackNavigator from "./src/navigation/StackNavigation";


const App = () => {
    return (
      <NavigationContainer>
    <SafeAreaView style={styles.container}>
      <AppState>
        <StackNavigator/>
      </AppState>
    </SafeAreaView>
    </NavigationContainer>
  )
}
const AppState=({children})=>{
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App; 