import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack'

import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from "./screens/LoginScreen"

const Stack = createStackNavigator();

// const config = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     damping: 500,
//     mass: 3,
//     overshootClamping: true,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
  headerTitleAlign: "center",
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  // transitionSpec: {
  //   open: config,
  //   close: config,
  // },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
