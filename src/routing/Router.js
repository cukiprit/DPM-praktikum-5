import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../components/Login/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import Elma from "../components/Elma/Elma";
import Register from "../components/Register/Register";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Elma" component={Elma} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
