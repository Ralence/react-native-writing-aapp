import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import PreviewCard from "../components/PreviewCard";

const Home = ({ navigation }) => {
  const [COLOR_PALETTES, setCOLOR_PALETTES] = useState([]);

  const getColors = useCallback(async () => {
    try {
      const res = await fetch("https://color-palette-api.kadikraman.now.sh/palettes");

      const palettes = await res.json();

      if (res.ok) {
        setCOLOR_PALETTES(palettes);
      }
    } catch (err) {
      console.log(err);
    }
  });

  useEffect(() => {
    getColors();
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        style={styles.list}
        data={COLOR_PALETTES}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PreviewCard
            item={item}
            handlePress={() =>
              navigation.navigate("Color Palette", {
                paletteName: item.paletteName,
                colors: item.colors,
              })
            }
          />
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
});

export default Home;
