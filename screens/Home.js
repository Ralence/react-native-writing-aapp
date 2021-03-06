import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, FlatList, RefreshControl, Button } from "react-native";
import PreviewCard from "../components/PreviewCard";

const Home = ({ navigation, route }) => {
  const newColorPalette = route.params ? route.params.newColorPalette : null;
  const [COLOR_PALETTES, setCOLOR_PALETTES] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

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
  }, []);

  useEffect(() => {
    getColors();
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setCOLOR_PALETTES((COLOR_PALETTES) => [newColorPalette, ...COLOR_PALETTES]);
    }
  }, [newColorPalette]);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await getColors();
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        style={styles.list}
        data={COLOR_PALETTES}
        keyExtractor={(item) => item.paletteName}
        ListHeaderComponent={
          <Button title="Add a color scheme" onPress={() => navigation.navigate("AddNewPalette")} />
        }
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
        refreshing={refreshing}
        onRefresh={() => handleRefresh()}
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
