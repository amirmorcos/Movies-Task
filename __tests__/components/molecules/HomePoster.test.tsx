import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../../App";
import HomePoster from "molecules/HomePoster";
import React from "react";
import renderer from "react-test-renderer";

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

test("renders correctly", () => {
  const tree = renderer
    .create(
      <QueryClientProvider client={queryClient}>
        <HomePoster path="https://image.tmdb.org/t/p/w370_and_h556_bestv2/dcnSWFCtk4b2aIzkhq6IDbzoIf1.jpg" />
      </QueryClientProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
