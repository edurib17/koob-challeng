import React from "react";
import { GetDataProvider } from "./src/hooks/getData";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Pages
import Home from "./src/screens/Home";
import { ChooseVehicle } from "./src/screens/ChooseVehicle";
import { ChooseModelVehicle } from "./src/screens/ChooseModelVehicle";
import { ChooseYearVehicle } from "./src/screens/ChooseYearVehicle";
import { DetailsVehicle } from "./src/screens/DetailsVehicle";

const App = () => {
  const Stack = createStackNavigator();
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <GetDataProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ChooseVehicle" component={ChooseVehicle} />
          <Stack.Screen
            name="ChooseModelVehicle"
            component={ChooseModelVehicle}
          />
          <Stack.Screen
            name="ChooseYearVehicle"
            component={ChooseYearVehicle}
          />
          <Stack.Screen name="DetailsVehicle" component={DetailsVehicle} />
        </Stack.Navigator>
      </NavigationContainer>
    </GetDataProvider>
  );
};

export default App;
