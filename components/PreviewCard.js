import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";

const PreviewCard = ({ item, handlePress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
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
  );
};

export default PreviewCard;

const styles = StyleSheet.create({
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
