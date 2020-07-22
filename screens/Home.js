import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";

const RAINBOW = [
  { colorName: "Red", hexCode: "#FF0000" },
  { colorName: "Orange", hexCode: "#FF7F00" },
  { colorName: "Yellow", hexCode: "#FFFF00" },
  { colorName: "Green", hexCode: "#00FF00" },
  { colorName: "Violet", hexCode: "#8B00FF" },
];

const FRONTEND_MASTERS = [
  { colorName: "Red", hexCode: "#c02d28" },
  { colorName: "Black", hexCode: "#3e3e3e" },
  { colorName: "Grey", hexCode: "#8a8a8a" },
  { colorName: "White", hexCode: "#ffffff" },
  { colorName: "Orange", hexCode: "#e66225" },
];

const SOLARIZED = [
  { colorName: "Base03", hexCode: "#002b36" },
  { colorName: "Base02", hexCode: "#073642" },
  { colorName: "Base01", hexCode: "#586e75" },
  { colorName: "Base00", hexCode: "#657b83" },
  { colorName: "Base0", hexCode: "#839496" },
  { colorName: "Base1", hexCode: "#93a1a1" },
  { colorName: "Base2", hexCode: "#eee8d5" },
  { colorName: "Base3", hexCode: "#fdf6e3" },
  { colorName: "Yellow", hexCode: "#b58900" },
  { colorName: "Orange", hexCode: "#cb4b16" },
  { colorName: "Red", hexCode: "#dc322f" },
  { colorName: "Magenta", hexCode: "#d33682" },
  { colorName: "Violet", hexCode: "#6c71c4" },
  { colorName: "Blue", hexCode: "#268bd2" },
  { colorName: "Cyan", hexCode: "#2aa198" },
  { colorName: "Green", hexCode: "#859900" },
];

const Home = ({ navigation }) => {
  const COLOR_PALETTES = [
    { paletteName: "Solarized", colors: SOLARIZED },
    { paletteName: "Rainbow", colors: RAINBOW },
    { paletteName: "Frontend Masters", colors: FRONTEND_MASTERS },
  ];

  return (
    <View style={styles.page}>
      <FlatList
        style={styles.list}
        data={COLOR_PALETTES}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Color Palette", {
                paletteName: item.paletteName,
                colors: item.colors,
              })
            }
          >
            <Text style={styles.boldText}>Go to {item.paletteName} palette</Text>
            <FlatList
              data={item.colors.slice(0, 5)}
              keyExtractor={(item) => item.hexCode}
              horizontal
              renderItem={({ item }) => (
                <View style={[styles.box, { backgroundColor: item.hexCode }]}></View>
              )}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  list: {
    width: "95%",
    margin: 0,
  },
  button: {
    marginVertical: 10,
    paddingVertical: 20,
    width: "100%",
    backgroundColor: "white",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  box: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    marginVertical: 10,
    elevation: 1,
  },
});

export default Home;
