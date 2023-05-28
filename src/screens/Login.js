import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";


const Login = ({navigation}) => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here, such as making API requests to a backend server
    // You can use any authentication method like JWT, OAuth, or custom authentication

    // For the sake of example, let's assume authentication is successful if the number and password are both 'admin'
    if (number === "1234" && password === "wasd") {
      setIsLoggedIn(true);
      navigation.navigate('Home')
    } else {
      Alert.alert(
        "Invalid credentials",
        "Please enter valid number and password."
      );
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setNumber("");
    setPassword("");
  };

  const renderAppContent = () => {
    if (isLoggedIn) {
      return (
        <Home />
      );
    } else {
      return (
          <ImageBackground
            source={require("../assets/lgn_bg.jpg")}
            style={styles.bg}
          >
            <View style={styles.lgn_container}>
              <Text style={styles.lgn_title1}>Login</Text>
              <Text style={styles.lgn_title2}>SPIS</Text>
              <Text style={styles.note1}>
                Dont have an Account?{" "}
                <Text style={styles.focus} >Create One</Text>
              </Text>
              <TextInput
                placeholder="Number"
                value={number}
                onChangeText={setNumber}
                style={styles.inputfield}
                keyboardType='numeric'
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.inputfield}
              />
              <TouchableOpacity style={styles.lgn_btn} onPress={handleLogin}>
                <Text style={styles.lgn_btn_txt}>Login</Text>
              </TouchableOpacity>
              <Text style={styles.note1}>Forgot Password ?</Text>
            </View>
          </ImageBackground>
      );
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {renderAppContent()}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {},
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
  },
  lgn_container: {
    // backgroundColor: "#5eba7d",
    padding: 30,
    borderRadius: 20,
  },
  lgn_title1: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
  },
  lgn_title2: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 60,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "#000",
    textShadowRadius: 20,
  },
  note1: {
    textAlign: "center",
    fontSize: 14,
    color: "#fff",
    marginTop: 20,
  },
  focus: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  inputfield: {
    backgroundColor: "#f2f2f2",
    color: "#000",
    padding: 15,
    marginTop: 30,
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
  },
  lgn_btn: {
    alignItems: "center",
    color: "#fff",
    backgroundColor: "green",
    padding: 10,
    marginTop: 30,
    marginHorizontal: 90,
    borderRadius: 10,
  },
  lgn_btn_txt: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});