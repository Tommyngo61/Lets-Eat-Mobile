import "react-native-gesture-handler";
import React from "react";
import Profile from "./app/screens/Profile/Profile.js";
import WelcomeScreen from "./app/screens/WelcomeScreen/WelcomeScreen.js";
import Settings from "./app/screens/Settings/Settings.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  console.log("App Executed");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
