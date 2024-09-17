import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherICon from "react-native-vector-icons/Feather";
import AntIcon from "react-native-vector-icons/AntDesign";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
const Login8 = () => {
  return (
    <View style={style.container}>
      <View style={style.loginFormContainer}>
        <View style={style.loginHeader}>
          <Image
            style={{ width: "40%", height: 150 }}
            source={require("../assets/img/Lab01/XMEye icon.png")}
          ></Image>
        </View>

        <View style={style.loginBody}>
          <View style={style.loginItem}>
            <FontAwesomeIcon style={style.icon} name="user-o"></FontAwesomeIcon>
            <TextInput
              value={"Please input user name"}
              editable
              style={{
                fontSize: 18,
                left: 5,
                letterSpacing: 0.25,
                color: "gray",
              }}
            ></TextInput>
          </View>

          <View style={style.loginItem}>
            <AntIcon style={style.icon} name="lock1"></AntIcon>
            <TextInput
              value={"Please input password"}
              editable
              style={{
                fontSize: 18,
                left: 5,
                letterSpacing: 0.25,
                color: "gray",
              }}
            ></TextInput>
          </View>
        </View>

        <View style={style.loginFooter}>
          <TouchableOpacity style={style.loginButton}>
            <Text style={style.textBtn}>Login</Text>
          </TouchableOpacity>
          <View style={style.moreOptionSpaceBetween}>
            <TouchableOpacity>
              <Text style={style.textBtnLower}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.textBtnLower}>Forgot Password</Text>
            </TouchableOpacity>
          </View>

          <View style={style.otherLoginMethodText}>
            <TouchableOpacity style={style.otherLoginMethodBtn}>
              <Text style={style.otherMethodLoginTxt}>Other Login Methods</Text>
            </TouchableOpacity>
          </View>

          <View style={style.moreOptionBtn}>
            <TouchableOpacity
              style={[style.moreOptionBtnItem, { backgroundColor: "#3ab4ff" }]}
            >
              <FontAwesome6
                color="#fff"
                name="user-plus"
                size={50}
              ></FontAwesome6>
            </TouchableOpacity>

            <TouchableOpacity
              style={[style.moreOptionBtnItem, { backgroundColor: "#f4aa47" }]}
            >
              <FontAwesome6 name="wifi" size={50} color="#fff"></FontAwesome6>
            </TouchableOpacity>

            <TouchableOpacity
              style={[style.moreOptionBtnItem, { backgroundColor: "#3a579c" }]}
            >
              <FontAwesomeIcon
                name="facebook"
                size={50}
                color="#fff"
              ></FontAwesomeIcon>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login8;

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  loginFormContainer: {
    width: "100%",
    height: 1000,
  },
  loginHeader: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: 'cyan'
  },
  loginBody: {
    width: "100%",
    height: 150,
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: 'cyan',
    justifyContent: "space-around",
  },
  loginItem: {
    width: "90%",
    height: 50,
    // backgroundColor: 'lime',
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  icon: {
    fontSize: 40,
    width: 45,
    height: 45,
    objectFit: "cover",
    alignItems: "center",
  },
  loginFooter: {
    width: "100%",
    height: 350,
    // backgroundColor: "cyan",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  loginButton: {
    width: "90%",
    height: 50,
    backgroundColor: "#386ffc",
    position: "relative",
    zIndex: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn: {
    fontSize: 20,
    width: "100%",
    height: "100%",
    textAlign: "center",
    verticalAlign: "middle",
    paddingTop: 12,
    textTransform: "uppercase",
    color: "#fff",
  },
  moreOptionSpaceBetween: {
    width: "90%",
    // backgroundColor: 'lime',
    height: 40,
    justifyContent: "space-between",
    flexDirection: "row",
    alignContent: "center",
  },
  textBtnLower: {
    fontSize: 18,
    letterSpacing: 0,
  },
  otherLoginMethodText: {
    width: "90%",
    height: 30,
    borderBottomWidth: 1.25,
    borderBottomColor: "blue",
    borderStyle: "solid",
    zIndex: -1,
  },
  otherLoginMethodBtn: {
    width: "100%",
    height: "100%",
    // backgroundColor: 'orange',
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },
  otherMethodLoginTxt: {
    fontSize: 18,
    textAlign: "center",
    top: 17,
    zIndex: 1,
    backgroundColor: "white",
    height: "100%",
  },
  moreOptionBtn: {
    width: "90%",
    height: 100,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  moreOptionBtnItem: {
    borderRadius: 20,
    width: "28%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
