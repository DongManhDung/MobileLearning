import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import RadioForm, { RadioButtonInput } from "react-native-simple-radio-button";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";

const Login5 = () => {
  const [value, setValue] = useState(0);
  const items = [
    { label: "Male", value: 0 },
    { label: "Female", value: 1 },
  ];

  return (
    <View style={style.container}>
      <View style={style.loginHeader}>
        <Text style={style.textHeader}>Login</Text>
      </View>

      <View style={style.loginBody}>
        <TextInput
          value={"Name"}
          style={style.inputBody}
          maxLength={255}
          editable
        ></TextInput>

        <TextInput
          value={"Phone"}
          style={style.inputBody}
          maxLength={25}
          editable
        ></TextInput>

        <TextInput
          value={"Email"}
          style={style.inputBody}
          maxLength={255}
          editable
        ></TextInput>

        <TextInput
          value={"Password"}
          style={style.inputBody}
          maxLength={255}
          editable
        ></TextInput>
        <FontAwesomeIcon
          name="eye"
          style={style.symbolIconInput}
        ></FontAwesomeIcon>

        <TextInput
          value={"Birthday"}
          style={style.inputBody}
          maxLength={10}
          editable
        ></TextInput>

        <View style={style.genderBoxGroup}>
          <RadioForm
            labelStyle={style.radioButtonLabel}
            buttonWrapStyle={style.radioButtonWrap}
            radio_props={items}
            onPress={(value) => setValue(value)}
            initial={value}
            buttonColor="black"
            selectedButtonColor="black"
            formHorizontal
            buttonSize={15}
          ></RadioForm>          
        </View>
      </View>

      <View style={style.loginFooter}>
        <TouchableOpacity style={style.footerLoginContainer}>
          <Text style={style.footerLoginItem}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={style.loginMoreOption}>
        <Text style={style.loginMoreOptionItem}>
          When you agree to terms and conditions
        </Text>
      </View>
    </View>
  );
};

export default Login5;

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#d8efdf",
  },
  loginHeader: {
    width: "100%",
    height: 200,
    // backgroundColor: 'black'
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    width: 200,
    height: 100,
    textAlign: "center",
    // backgroundColor: 'violet', test
    verticalAlign: "middle",
    textTransform: "uppercase",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: "0.15",
    position: "relative",
    top: "20%",
  },
  loginBody: {
    width: "100%",
    height: 450,
    // backgroundColor: 'green',
    display: "flex",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  inputBody: {
    fontSize: 18,
    width: "90%",
    height: 45,
    backgroundColor: "#cae1d1",
    position: "relative",
    paddingLeft: "3%",
    borderRadius: 3,
    fontWeight: "500",
    letterSpacing: "0.35",
  },
  symbolIconInput: {
    position: "absolute",
    right: "10%",
    fontSize: 40,
    bottom: "38%",
  },
  genderBoxGroup: {
    width: "90%",
    height: 10,
    // borderWidth: 0.5,
    // borderColor: "gray",
    display: "flex",
    justifyContent: "space-around",
    alignContent: "center",
    flexDirection: 'row'
  },
  radioButtonLabel: {
     fontSize: 20,
     paddingHorizontal: 60,
  },
  loginFooter: {
    width: "100%",
    height: 70,
    // backgroundColor: 'orange',
    position: "relative",
    top: "3%",
  },
  footerLoginContainer: {
    width: "90%",
    height: 65,
    backgroundColor: "#c34e3b",
    display: "flex",
    justifyContent: "center",
    verticalAlign: "middle",
    marginLeft: 20,
    borderRadius: 5,
  },
  footerLoginItem: {
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 25,
    width: "100%",
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 0.15,
  },
  loginMoreOption: {
    position: "relative",
    top: "4%",
    width: "100%",
    height: 400,
    // backgroundColor: 'orange'
  },
  loginMoreOptionItem: {
    fontSize: 17,
    textAlign: "center",
    width: "100%",
    height: 45,
    paddingTop: "5%",
    fontWeight: "450",
    letterSpacing: 0.15,
  },
  forgotPassColor: {
    color: "#5d25fa",
  },
  loginFunction: {
    position: "relative",
    top: "10%",
    width: "90%",
    height: 70,
    // backgroundColor: 'pink',
    marginLeft: 20,
    borderRadius: 3,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  loginFunctionItem: {
    width: "33%",
    height: "100%",
    borderColor: "#00B2EE",
    borderWidth: 1,
  },
  facebookBG: {
    backgroundColor: "#275a8e",
    width: "100%",
    height: "100%",
  },

  imgIcon: {
    width: 115,
    height: 68,
    objectFit: "cover",
  },
  imgIconContain: {
    objectFit: "contain",
  },
});
