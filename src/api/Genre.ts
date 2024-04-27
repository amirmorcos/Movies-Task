import { Genre } from "models/Genre";
import apiInstance from ".";
import { Urls } from "./Urls";

export const getGenres = async () => {
  const response = await apiInstance.get(
    `${Urls.GENRES_LIST}?api_key=6b4357c41d9c606e4d7ebe2f4a8850ea`
  );
  return response.data.genres as Genre[];
};
