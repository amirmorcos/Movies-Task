jest.mock("react-native-vector-icons/FontAwesome6", () => "Icon");
jest.mock("react-native-size-matters", () => ({
  s: jest.fn(),
  vs: jest.fn(),
  moderateScale: jest.fn(),
}));
