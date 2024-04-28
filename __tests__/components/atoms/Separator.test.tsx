import Separator from "atoms/Separator";
import React from "react";
import renderer from "react-test-renderer";

jest.mock("react-native-vector-icons/FontAwesome6", () => "Icon");
jest.mock("react-native-size-matters", () => ({
  s: jest.fn(),
  vs: jest.fn(),
  moderateScale: jest.fn(),
}));

test("renders correctly", () => {
  const tree = renderer.create(<Separator />).toJSON();
  expect(tree).toMatchSnapshot();
});
