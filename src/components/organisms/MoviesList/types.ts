import { Movie } from "models/Movie";

export type MoviesListProps = {
  data: Movie[];
  getNextPage: () => void;
  isLoading: boolean;
  hasNextPage: boolean;
  onRefetch: () => void;
  isRefetching: boolean;
};
