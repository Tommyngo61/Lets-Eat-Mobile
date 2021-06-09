import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import colors from "../config/colors";

export default function WelcomePage({ navigation }) {
  const handlePress = () => {
    console.log("Text Pressed");
  };
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-example.png")}
        />
        <Text>Let's Eat</Text>
      </View>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile", { name: "Profile" })}
        style={styles.loginButton}
      ></Button>
      <Button title="Register" style={styles.registerButton}></Button>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "red",
  },
  registerButton: {
    width: "100%",
    height: 70,
    color: colors.secondary,
  },
});
