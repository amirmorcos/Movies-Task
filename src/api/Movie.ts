import { MovieResponse } from "models/MovieResponse";
import apiInstance from ".";
import { Urls } from "./Urls";

export const getMoviesList = async (page = 1) => {
  const response = await apiInstance.get(
    `${Urls.MOVIES_LIST}?sort_b=popularity.desc&api_key=6b4357c41d9c606e4d7ebe2f4a8850ea&page=${page}`
  );
  return response.data as MovieResponse;
};
