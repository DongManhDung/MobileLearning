import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen01 from './Screen01.js';
import Screen02 from './Screen02.js';
import Screen03 from './Screen03.js';

import { Provider } from 'react-redux'
import store from './store'

const Stack = createStackNavigator();
LogBox.ignoreAllLogs();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='Screen01' component={Screen01}></Stack.Screen>
      
    //       <Stack.Screen name='Screen02' component={Screen02}></Stack.Screen>
    //     <Stack.Screen name='Screen03' component={Screen03}></Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer> 
    <Provider store={store}>
        <Screen02></Screen02>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
});
