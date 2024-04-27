import HomePoster from "molecules/HomePoster";
import HomePosterList from "organisms/HomePosterList";
import React from "react";
import { ImageBackground, ScrollView, View } from "react-native";
import { dummyData } from "../../../dummy-data";
import styles from "./styles";

const HomeScreen = () => {
  const firstMovie = dummyData.results[0];
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${firstMovie.poster_path}`,
        }}
        style={{
          flex: 1,
          width: undefined,
          height: undefined,
          opacity: 0.8,
          justifyContent: "flex-end",
        }}
      />
      <HomePosterList
        data={dummyData.results}
        overrideContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default HomeScreen;
