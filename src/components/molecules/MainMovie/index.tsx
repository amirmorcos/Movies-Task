import { useMovie } from "hooks/useMovie";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { MainMovieProps } from "./types";
import FastImage from "react-native-fast-image";

const MainMovie = ({ movie }: MainMovieProps) => {
  const { getMoviePoster, getMovieGenre } = useMovie();
  return (
    <FastImage
      source={{
        uri: getMoviePoster(movie.poster_path),
      }}
      style={styles.imageBg}
      resizeMode="stretch"
    >
      <View style={styles.infoContainer}>
        <Text style={styles.info}>
          {new Date(movie.release_date).getFullYear()}
        </Text>
        <Text style={styles.info}>•</Text>
        <Text style={styles.info}>{getMovieGenre(movie.genre_ids)}</Text>
      </View>
    </FastImage>
  );
};

export default MainMovie;
