import HomePosterList from "organisms/HomePosterList";
import React from "react";
import { ImageBackground, View } from "react-native";
import { dummyData } from "../../../dummy-data";
import styles from "./styles";
import { getPosterImage } from "../../utils/constants";

const HomeScreen = () => {
  const firstMovie = dummyData.results[0];
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: getPosterImage(firstMovie.poster_path),
        }}
        style={styles.imageBg}
      />
      <HomePosterList
        data={dummyData.results}
        overrideContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default HomeScreen;
