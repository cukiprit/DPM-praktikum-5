import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../components/Login/Login';
import Dashboard from '../components/Dashboard/Dashboard';
import Elma from '../components/Elma/Elma';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Elma" component={Elma} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;