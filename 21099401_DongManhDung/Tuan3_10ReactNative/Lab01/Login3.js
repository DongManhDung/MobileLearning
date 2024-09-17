import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


const Login3 = () => (
  <View style={style.Container}>
    <LinearGradient
      style={style.Container}
      colors={[ "#ccf4f7",  "#00ccf9"]}
    >
      <View style={style.imgContainer}>
        <Image
          style={style.imgCenter}
          source={require("../assets/img/Lab01/lock-vector.png")}
        />
      </View>

      <View style={style.textCenterContainer}>
        <Text style={style.textCenterGrow}>FORGET{"\n"}PASSWORD</Text>
      </View>

      <View style={style.textCenterContainer}>
        <Text style={style.textCenterSmall}>
          Provide your account's email for which you want to reset your password
        </Text>
      </View>

      <View style={style.inputContainer}>
        <FontAwesomeIcon style={style.symbolNearInput} name='envelope' size={25}/>
        <TextInput value={'Email'} style={style.input} maxLength={55} editable>
        </TextInput>
      </View>

      <View style={style.buttonContainer}>
        <TouchableOpacity style={style.button}>
          <Text
            style={{
              letterSpacing: 0.15,
              color: "#000000",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  </View>
);

export default Login3;

const style = StyleSheet.create({
  Container: {
    // flex: 1,
    width: 400,
    height: 800,
  },
  imgContainer: {
    width: 400,
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  imgCenter: {
    width: 260,
    height: 200,
    textAlign: "center",
    justifyContent: "center",
    objectFit: "contain",
  },
  textCenterContainer: {
    width: 400,
    height: 100,
    // backgroundColor: 'yellow',
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textCenterGrow: {
    textAlign: "center",
    fontSize: 20,
    width: 250,
    height: 100,
    fontWeight: "bold",
  },
  textCenterSmall: {
    width: 360,
    height: 100,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    width: 400,
    height: 50,
    display: "flex",
    justifyContent: "space-around",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: 'yellow'
  },
  button: {
    backgroundColor: "#f2c401",
    width: '90%',
    height: 45,
    borderRadius: 5,
    marginTop: 35,
    marginRight: 13,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  textCenterMedium: {
    fontWeight: "bold",
    marginBottom: 50,
  },
  inputContainer: {
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: '100%',
    backgroundColor: '#eaeaea',
    borderRadius: 5,
    marginLeft: 14,
    paddingLeft: 55,
    position: 'relative'
  },
  symbolNearInput: {
    position: 'absolute',
    zIndex: 1,
    paddingLeft: 35
  }
});
