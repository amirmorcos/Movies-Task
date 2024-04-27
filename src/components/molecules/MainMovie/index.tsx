import { useMovie } from "hooks/useMovie";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import styles from "./styles";
import { MainMovieProps } from "./types";

const MainMovie = ({ movie }: MainMovieProps) => {
  const { getMoviePoster } = useMovie();
  return (
    <ImageBackground
      source={{
        uri: getMoviePoster(movie.poster_path),
      }}
      style={styles.imageBg}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.info}>
          {new Date(movie.release_date).getFullYear()}
        </Text>
        <Text style={styles.info}>•</Text>
        <Text style={styles.info}>Action, Romance</Text>
      </View>
    </ImageBackground>
  );
};

export default MainMovie;
