import axios from "axios";
import { Urls } from "./Urls";

const apiInstance = axios.create({
  baseURL: Urls.BASE_URL,
  timeout: 1000,
  params: {
    api_key: "6b4357c41d9c606e4d7ebe2f4a8850e",
  },
});

export default apiInstance;
