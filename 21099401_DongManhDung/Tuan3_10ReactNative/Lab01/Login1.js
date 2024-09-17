import {TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";

const Login1 = () => (
  <View style={style.Container}>
    <View style={style.imgContainer}>
      <Image
        style={style.imgCenter}
        source={require("../assets/img/Lab01/circle vector.png")}
      />
    </View>

    <View style={style.textCenterContainer}>
      <Text style={style.textCenterGrow}>GROW{'\n'}YOUR BUSINESS</Text>
    </View>

    <View style={style.textCenterContainer}>
        <Text style={style.textCenterSmall}>We will help you to grow your business using online server</Text>
    </View>

    <View style={style.buttonContainer}>
    <TouchableOpacity style={style.button}>
        <Text style={{letterSpacing: 0.15,color: '#000000',textAlign: 'center',fontWeight: 'bold'}}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button}>
        <Text style={{letterSpacing: 0.15,color: '#000000',textAlign: 'center',fontWeight: 'bold'}}>SIGN UP</Text>
      </TouchableOpacity>
    </View>

  </View>
);

export default Login1;

const style = StyleSheet.create({
  Container: {
    // flex: 1,
    width: 400,
    height: 800,
    backgroundColor: '#00ccf9',
  }
  ,imgContainer: {
    width: 400,
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: '#00ccf9',
  },
  imgCenter: {
    width: 200,
    height: 200,
    textAlign: "center",
    justifyContent: "center",
  },
  textCenterContainer: {
  width: 400,
  height: 100,
  // backgroundColor: 'yellow',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  },
  textCenterGrow: {
    textAlign: 'center',
    fontSize: 20,
    width: 250,
    height: 100,
    fontWeight: 'bold',
  },
  textCenterSmall: {
    width: 360,
    height: 100,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: 400,
    height: 200,
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'yellow'
  },
  button: {
    backgroundColor: "#f2c401",
    width: 100,
    height: 45,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  }
});
