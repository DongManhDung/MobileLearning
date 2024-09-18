import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Lab01
import Login1 from '../Tuan3_10ReactNative/Lab01/Login1.js';
import Login2 from '../Tuan3_10ReactNative/Lab01/Login2.js';
import Login3 from '../Tuan3_10ReactNative/Lab01/Login3.js';
import Login4 from '../Tuan3_10ReactNative/Lab01/Login4.js';
import Login5 from '../Tuan3_10ReactNative/Lab01/Login5.js';
import Login6 from '../Tuan3_10ReactNative/Lab01/Login6.js';
import Login7 from '../Tuan3_10ReactNative/Lab01/Login7.js';
import Login8 from '../Tuan3_10ReactNative/Lab01/Login8.js';

// Lab02
import Screen1 from '../Tuan3_10ReactNative/Lab02/Screen1.js';
import Screen2 from '../Tuan3_10ReactNative/Lab02/Screen2.js';
import Screen3 from '../Tuan3_10ReactNative/Lab02/Screen3.js';
import Screen4 from '../Tuan3_10ReactNative/Lab02/Screen4.js';

// Lab03
import Lab03Screen1 from './Lab03/Lab03Screen1.js';
import Lab03Screen2 from './Lab03/Lab03Screen2.js';


const Stack = createStackNavigator();

export default function App() {
  return (
    // {/* This is excersice Lab01 */}
    // {/* <Login1/> */}
    // {/* <Login2/> */}
    // {/* <Login3></Login3> */}
    // {/* <Login4></Login4> */}
    // {/* <Login5></Login5> */}
    // {/* <Login6></Login6> */}
    // {/* <Login7></Login7> */}
    // {/* <Login8></Login8> */}

    // {/* This is excersice Lab02 */}
    // {/* <Screen1></Screen1> */}
    // {/* <Screen2></Screen2> */}
    // {/* <Screen3></Screen3> */}
    // {/* <Screen4></Screen4> */}

    //  {/* This is exercise Lab03 */}
     <NavigationContainer initialRouteName="Lab03Screen1">
            <Stack.Navigator>     
                <Stack.Screen name="Lab03Screen1" component={Lab03Screen1}></Stack.Screen> 
                <Stack.Screen name="Lab03Screen2" component={Lab03Screen2}></Stack.Screen> 
            </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
