import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Pages
import Home from './src/screens/Home';
import {ChooseVehicle} from './src/screens/ChooseVehicle';

const App = () => {
  const Stack = createStackNavigator();
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ChooseVehicle" component={ChooseVehicle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
