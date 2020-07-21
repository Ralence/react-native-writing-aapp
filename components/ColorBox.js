import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorBox = ({ colorName, hexCode }) => {
  const textColor = {
    color: parseInt(hexCode.replace("#", ""), 16) > 0xffffff / 1.1 ? "#000000" : "#ffffff",
  };
  return (
    <View style={[styles.container, { backgroundColor: hexCode }]}>
      <Text style={[styles.text, textColor]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    width: "100%",
    height: 50,
  },
  text: {
    color: "white",
    fontSize: 25,
    alignSelf: "center",
  },
});

export default ColorBox;
