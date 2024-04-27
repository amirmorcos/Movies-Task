import { Urls } from "api/Urls";

export const getPosterImage = (path: string) => {
  return `${Urls.POSTER_IMAGE}${path}`;
};
