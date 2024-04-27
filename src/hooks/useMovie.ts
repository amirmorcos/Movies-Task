import { useQuery } from "@tanstack/react-query";
import { getGenres } from "api/Genre";
import { getMoviesList } from "api/Movie";
import { Urls } from "api/Urls";

export const useMovie = () => {
  const {
    data: moviesList,
    isLoading: moviesLoading,
    error: moviesError,
    refetch: onRefetchMovies,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: () => getMoviesList(),
  });

  const {
    data: genresList,
    isLoading: genresLoading,
    error: genresError,
    refetch: onRefetchGenres,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: () => getGenres(),
  });

  const getMoviePoster = (path: string) => {
    return `${Urls.POSTER_IMAGE}${path}`;
  };

  const getMovieGenre = (genreIds: number[]) => {
    return genresList
      ?.filter((item) => genreIds.includes(item.id))
      .map((item) => item.name)
      .join(", ");
  };

  const onRefetchData = () => {
    onRefetchGenres();
    onRefetchMovies();
  };

  const hasError = genresError || moviesError;

  return {
    getMoviePoster,
    onRefetchData,
    genresList,
    moviesList,
    moviesLoading,
    genresLoading,
    hasError,
    getMovieGenre,
  };
};
