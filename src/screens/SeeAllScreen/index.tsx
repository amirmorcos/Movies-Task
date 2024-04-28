import React from "react";
import { MoviesList } from "organisms/index";
import { useMovie } from "hooks/useMovie";
import { LoadingSpinner, ErrorContainer } from "atoms/index";

const SeeAllScreen = () => {
  const {
    moviesList,
    fetchNextPage,
    moviesLoading,
    hasError,
    onRefetchData,
    movieFetching,
    hasNextPage,
    movieRefetching,
    onRefetchMovies,
  } = useMovie();

  const onRetrieveNextPage = () => {
    fetchNextPage();
  };

  if (moviesLoading) {
    return <LoadingSpinner />;
  }

  if (hasError) {
    return <ErrorContainer onRefetch={onRefetchData} />;
  }

  return (
    <MoviesList
      isLoading={movieFetching}
      data={moviesList?.results!}
      getNextPage={onRetrieveNextPage}
      hasNextPage={hasNextPage}
      isRefetching={movieFetching}
      onRefetch={() => onRefetchMovies()}
    />
  );
};

export default SeeAllScreen;
