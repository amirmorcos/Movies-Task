import React from "react";
import { Image, View } from "react-native";
import { HomePosterProps } from "./types";
import styles from "./styles";
import { useMovie } from "hooks/useMovie";
import FastImage from "react-native-fast-image";

const HomePoster = ({ path, overrideContainerStyle }: HomePosterProps) => {
  const { getMoviePoster } = useMovie();
  return (
    <View style={[styles.container, overrideContainerStyle]}>
      <FastImage
        source={{
          uri: getMoviePoster(path),
        }}
        style={styles.image}
        resizeMode="stretch"
      />
    </View>
  );
};

export default HomePoster;
