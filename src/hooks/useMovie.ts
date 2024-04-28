import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getGenres } from "api/Genre";
import { getMoviesList } from "api/Movie";
import { Urls } from "api/Urls";

export const useMovie = () => {
  const {
    data: moviesList,
    isLoading: moviesLoading,
    error: moviesError,
    refetch: onRefetchMovies,
    fetchNextPage,
    hasNextPage,
    isFetching: movieFetching,
    isRefetching: movieRefetching,
  } = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: ({ pageParam }) => getMoviesList(pageParam),
    getNextPageParam: (lastPage) => {
      const nextPage =
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : 0;
      return nextPage;
    },
    initialPageParam: 1,
    select: (data) => {
      return data.pages[0];
    },
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
    fetchNextPage,
    movieFetching,
    hasNextPage,
    movieRefetching,
    onRefetchMovies,
  };
};
