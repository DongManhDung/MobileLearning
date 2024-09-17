import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const Login3 = () => (
  <View style={style.Container}>
    <LinearGradient
      style={style.Container}
      colors={[ "#ccf4f7",  "#00ccf9"]}
      locations={[0.80, 0.90]}
    >
      <View style={style.textContainer}>
        <Text style={style.textBigCenter}>CODE</Text>
      </View>

      <View style={style.textCenterContainer}>
        <Text style={style.textCenterGrow}>VERIFICATION</Text>
      </View>

      <View style={style.textCenterContainer}>
        <Text style={style.textCenterSmall}>
          Enter ontime password sent on {'\n'}
          ++849092605798
        </Text>
      </View>

      <View style={style.inputContainer}>
        <TextInput
          value={""}
          style={style.input}
          maxLength={1}
          editable
        ></TextInput>
        
        <TextInput
          value={""}
          style={style.input}
          maxLength={1}
          editable
        ></TextInput>

        <TextInput
          value={""}
          style={style.input}
          maxLength={1}
          editable
        ></TextInput>

        <TextInput
          value={""}
          style={style.input}
          maxLength={1}
          editable
        ></TextInput>

        <TextInput
          value={""}
          style={style.input}
          maxLength={1}
          editable
        ></TextInput>

        <TextInput
          value={""}
          style={style.input}
          maxLength={1}
          editable
        ></TextInput>
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
            VERIFY CODE
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
  textContainer: {
    width: 400,
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  textBigCenter: {
    width: 260,
    height: 70,
    textAlign: "center",
    justifyContent: "center",
    objectFit: "contain",
    fontSize: 70,
    fontWeight: 'bold'
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
    width: "90%",
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
    width: "90%",
    height: 55,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    marginLeft: 16,
    gap: 3,
    flexWrap: 'wrap',
  },
  input: {
    width: "15%",
    height: "100%",
    // backgroundColor: "#eaeaea",
    borderRadius: 5,
    paddingLeft: 55,
    position: "relative",
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: '1px'
  },
});
