import { Urls } from "api/Urls";

export const useMovie = () => {
  const getMoviePoster = (path: string) => {
    return `${Urls.POSTER_IMAGE}${path}`;
  };

  return {
    getMoviePoster,
  };
};
