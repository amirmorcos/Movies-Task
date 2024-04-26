import HomePoster from "molecules/HomePoster";
import HomePosterList from "organisms/HomePosterList";
import React from "react";
import { ImageBackground, View } from "react-native";
import { dummyData } from "../../../dummy-data";

const HomeScreen = () => {
  const firstMovie = dummyData.results[0];
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${firstMovie.poster_path}`,
        }}
        style={{
          flex: 1,
          width: undefined,
          height: undefined,
          opacity: 0.8,
        }}
      />
      <View style={{ padding: 15 }}>
        <HomePosterList data={dummyData.results} />
      </View>
    </View>
  );
};

export default HomeScreen;
