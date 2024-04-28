import { MovieItem } from "molecules/index";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  View,
} from "react-native";
import styles from "./styles";
import { MoviesListProps } from "./types";

const MoviesList = ({
  data,
  getNextPage,
  isLoading,
  hasNextPage,
  isRefetching,
  onRefetch,
}: MoviesListProps) => {
  const loadMoreMovies = () => {
    if (hasNextPage) {
      getNextPage();
    }
  };
  return (
    <FlatList
      data={data}
      style={styles.container}
      contentContainerStyle={styles.content}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <MovieItem item={item} />}
      // onEndReached={loadMoreMovies}
      // onEndReachedThreshold={0.3}
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={onRefetch} />
      }
      ListFooterComponent={() =>
        isLoading && (
          <View style={styles.loadMoreContainer}>
            <ActivityIndicator />
          </View>
        )
      }
    />
  );
};

export default MoviesList;
