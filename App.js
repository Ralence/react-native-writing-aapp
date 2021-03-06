import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ColorBox from "./components/ColorBox";
import HomeScreen from "./screens/Home";
import ColorPalette from "./screens/ColorPalette";
import ColorPaletteModal from "./screens/ColorPaletteModal";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen
        name="Color Palette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="AddNewPalette"
          component={ColorPaletteModal}
          options={{ title: "Add New Palette" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
  },
  blue: {
    backgroundColor: "blue",
  },
  magenta: {
    backgroundColor: "magenta",
  },
  orange: {
    backgroundColor: "orange",
  },
  container: {
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    width: "90%",
    height: 50,
  },
  text: {
    color: "white",
    fontSize: 25,
    alignSelf: "center",
  },
  list: {
    width: "95%",
    margin: 0,
  },
});
