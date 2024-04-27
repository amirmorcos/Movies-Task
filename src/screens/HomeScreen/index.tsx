import HomePosterList from "organisms/HomePosterList";
import React from "react";
import { View } from "react-native";
import { dummyData } from "../../../dummy-data";
import styles from "./styles";
import MainMovie from "molecules/MainMovie";

const HomeScreen = () => {
  const mainMovie = dummyData.results[0];
  return (
    <View style={styles.container}>
      <MainMovie movie={mainMovie} />
      <HomePosterList
        data={dummyData.results}
        overrideContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default HomeScreen;
