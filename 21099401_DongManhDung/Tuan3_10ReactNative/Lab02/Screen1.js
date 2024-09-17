import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntIcon from "react-native-vector-icons/AntDesign";
import FontAweSomeIcon from "react-native-vector-icons/FontAwesome";
// import BlurView from 'react-native-blur';

const Login7 = () => {
  return (
    <LinearGradient
      style={style.loginContainer}
      colors={["#f4c501", "#c29d01"]}
      locations={[0.3, 0.6]}
    >
      <View style={style.loginHeader}>
        <Text style={style.loginTitleHeader}>Login</Text>
      </View>

      <View style={style.loginBody}>
        <View style={style.formGroup}>
          <FontAweSomeIcon name={"user"} size={30}></FontAweSomeIcon>
          <TextInput value="Name" style={style.loginTextInput}></TextInput>
        </View>

        <View style={style.formGroup}>
          <FontAweSomeIcon name={"lock"} size={30}></FontAweSomeIcon>
          <TextInput value="Password" style={style.loginTextInput}></TextInput>
        </View>
        <TouchableOpacity>
            <AntIcon name={"eye"} style={style.iconSetting}></AntIcon>
        </TouchableOpacity>
      </View>

      <View style={style.loginFooter}>
            <View style={style.loginFooterGroup}>
            <TouchableOpacity>
                <Text style={style.textButton}>Login</Text>
            </TouchableOpacity>
            </View>

            <View style={style.loginFooterGroup}>
                <TouchableOpacity>
                <Text style={{textAlign: 'center',fontSize: 22, fontWeight: 'bold'}}>Forgot your password?</Text>
                </TouchableOpacity>
                
            </View>
      </View>
    </LinearGradient>
  );
};

export default Login7;

const style = StyleSheet.create({
  loginContainer: {
    width: "100%",
    height: 900,
  },
  loginHeader: {
    width: "100%",
    // backgroundColor: 'red',
    height: 200,
    display: "flex",
    justifyContent: "center",
  },
  loginTitleHeader: {
    fontSize: 35,
    marginTop: 40,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  loginBody: {
    width: "100%",
    height: 200,
    // backgroundColor: 'pink',
    display: "flex",
    justifyContent: "space-around",
  },
  formGroup: {
    height: 60,
    width: "90%",
    // backgroundColor: 'orange',
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginLeft: 20,
    borderRadius: 5,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 0.5,
  },
  loginTextInput: {
    fontSize: 20,
    paddingHorizontal: 30,
  },
  iconSetting: {
    position: 'absolute', 
    right: 20, 
    bottom: 20,
    fontSize: 40,
    marginRight: 20,
    marginBottom: 15
  },
  loginFooter: {
    width: '100%',
    // backgroundColor: 'lime',
    height: 250,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
    ,alignContent: 'center',
  }
  ,loginFooterGroup: {
    width: '90%',
    height: 60,
  },
  textButton: {
    height: 60,
    textAlign: 'center',
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 0.15,
    backgroundColor: 'black',
    color: '#ffffff',
    paddingVertical: 10,
    borderRadius: 10,
    position: 'relative'
  }
});
