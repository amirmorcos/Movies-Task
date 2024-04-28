import HomePosterList from "organisms/HomePosterList";
import React from "react";
import { View } from "react-native";
import styles from "./styles";
import MainMovie from "molecules/MainMovie";
import LoadingSpinner from "atoms/LoadingSpinner";
import { useMovie } from "hooks/useMovie";
import ErrorContainer from "atoms/ErrorContainer";

const HomeScreen = () => {
  const { moviesList, moviesLoading, hasError, onRefetchData } = useMovie();

  if (moviesLoading) {
    return <LoadingSpinner />;
  }

  if (hasError) {
    return <ErrorContainer onRefetch={onRefetchData} />;
  }

  const mainMovie = moviesList?.results[0]!;
  return (
    <View style={styles.container}>
      <MainMovie movie={mainMovie} />
      <HomePosterList
        data={moviesList?.results!}
        overrideContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default HomeScreen;
