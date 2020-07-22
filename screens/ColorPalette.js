import React from "react";
import { Text, StyleSheet, SafeAreaView, FlatList } from "react-native";

import ColorBox from "../components/ColorBox";

const ColorPalette = ({ colors }) => {
  return (
    <SafeAreaView style={styles.page}>
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          marginHorizontal: 20,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Here are some boxes of different color
      </Text>
      <FlatList
        keyExtractor={(item) => item.hexCode}
        style={styles.list}
        data={colors}
        renderItem={({ item }) => <ColorBox colorName={item.colorName} hexCode={item.hexCode} />}
      />
    </SafeAreaView>
  );
};

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

export default ColorPalette;
