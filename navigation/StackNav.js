import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/Home";
import ColorPalette from "./screens/ColorPalette";

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Color Palette" component={ColorPalette} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
  },
  container: {
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    width: "90%",
    height: 50,
  },
});

export default App;
