import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/login/Login';
import Main from './screens/main/Main';
import SignUp from './screens/signUp/SignUp';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
      name="Login" 
      component={Login} 
      options={{ headerShown: false }}
      // options={{HeaderTitle: 'Login Title', headerTintColor: 'red'}} 
      />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  </NavigationContainer>  
  );
}

