import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../../App";
import React from "react";
import renderer from "react-test-renderer";
import MainMovie from "molecules/MainMovie";

jest.mock("react-native-vector-icons/FontAwesome6", () => "Icon");
jest.mock("react-native-vector-icons/FontAwesome", () => "Icon");
jest.mock("react-native-size-matters", () => ({
  s: jest.fn(),
  vs: jest.fn(),
  moderateScale: jest.fn(),
}));
jest.mock("@react-navigation/bottom-tabs", () => ({
  createBottomTabNavigator: jest.fn(),
}));
jest.mock("react-native-fast-image", () => "FastImage");

const mainMovieObj = {
  adult: false,
  backdrop_path: "/dcnSWFCtk4b2aIzkhq6IDbzoIf1.jpg",
  genre_ids: [28, 35],
  id: 942047,
  original_language: "en",
  original_title: "Outsource",
  overview:
    "A police chief hires an old friend, who is an international spy, to help him search for a wanted suspect in the Philippines. When the chief dies, all evidence points towards the spy, and he must go to extremes to defend himself.",
  popularity: 534.58,
  poster_path: "/zIAF0UXtCJTJOYNYWiBfyifaaOi.jpg",
  release_date: "2022-01-18",
  title: "Outsource",
  video: false,
  vote_average: 2.273,
  vote_count: 11,
};

test("renders correctly", () => {
  const tree = renderer
    .create(
      <QueryClientProvider client={queryClient}>
        <MainMovie movie={mainMovieObj} />
      </QueryClientProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
