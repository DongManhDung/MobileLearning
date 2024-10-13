import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


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

// Lab04
import Chat from './Lab04/Chat.js';
import Products from './Lab04/Products.js';

// Lab05
import Screen01 from './Lab05/Screen01.js';
import Screen02 from './Lab05/Screen02.js';
import Screen03 from './Lab05/Screen03.js';

// Lab07
import APIScreen01 from './Lab07/APIScreen01.js';
import APIScreen02 from './Lab07/APIScreen02.js';
import APIScreen03 from './Lab07/APIScreen03.js';
import APIScreen04 from './Lab07/APIScreen04.js';

//Lab07_P2
import MasterPorTrait from "./Lab07_P2/MasterPorTrait.js";
import DetailPorTrait from "./Lab07_P2/DetailPorTrait.js";

const Tab = createBottomTabNavigator();
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
    //  <NavigationContainer initialRouteName="Lab03Screen1">
    //         <Stack.Navigator>     
    //             <Stack.Screen name="Lab03Screen1" component={Lab03Screen1}></Stack.Screen> 
    //             <Stack.Screen name="Lab03Screen2" component={Lab03Screen2}></Stack.Screen> 
    //         </Stack.Navigator>
    //  </NavigationContainer>


    // This is exercise Lab04
    // P1
    // <NavigationContainer>
    //     <Tab.Navigator initialRouteName="Chat" screenOptions={{tabBarStyle: {backgroundColor: '#1BA9FF'} ,tabBarActiveTintColor: "black", tabBarShowLabel: false}}>
    //       <Tab.Screen name="Chat" component={Chat} options={{tabBarLabel: 'Chat', tabBarIcon: ({color}) => 
    //       (<MaterialCommunityIcons name="home" color={color} size={45}/>),}}></Tab.Screen>

    //       <Tab.Screen name="Products" component={Products} options={{tabBarLabel: 'Products', tabBarIcon: ({color}) => 
    //         (<MaterialCommunityIcons name="arrow-left-top" color={color} size={45}/>),}}></Tab.Screen>
    //       </Tab.Navigator>
    //   </NavigationContainer>

    // This is exercise Lab05
    // <NavigationContainer initialRouteName='Screen01'>
    //     <Stack.Navigator>
    //       <Stack.Screen name='Screen01' component={Screen01}></Stack.Screen>
    //       <Stack.Screen name='Screen02' component={Screen02}></Stack.Screen>
    //       <Stack.Screen name='Screen03' component={Screen03}></Stack.Screen>
    //     </Stack.Navigator>
    // </NavigationContainer>

    // This is exercise Lab07
    // <NavigationContainer initialRouteName='APIScreen01'>
    //     <Stack.Navigator>
    //       <Stack.Screen name='APIScreen01' component={APIScreen01}></Stack.Screen>
    //       <Stack.Screen name='APIScreen02' component={APIScreen02}></Stack.Screen>
    //       <Stack.Screen name='APIScreen03' component={APIScreen03}></Stack.Screen>
    //       <Stack.Screen name='APIScreen04' component={APIScreen04}></Stack.Screen>
    //     </Stack.Navigator>
    // </NavigationContainer>

    //This is exercise Lab07_P2
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MasterPorTrait">
        <Stack.Screen name="MasterPorTrait" component={MasterPorTrait} />
        <Stack.Screen name="DetailPorTrait" component={DetailPorTrait} />
      </Stack.Navigator>
    </NavigationContainer>


    
      
  );
}

const styles = StyleSheet.create({
});
