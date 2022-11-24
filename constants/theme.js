import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const COLORS = {
  primarColor:   "rgba(0, 188, 228, 1)",
  primarColor80: "rgba(0, 188, 228, .8)",
  primarColor60: "rgba(0, 188, 228, .6)",
  primarColor15: "rgba(0, 188, 228, .3)",
  primarColor10: "rgba(0, 188, 228, .1)",

  secondaryColor:   "rgba(0, 115, 174, 1)",
  secondaryColor80: "rgba(0, 115, 174, .8)",
  secondaryColor60: "rgba(0, 115, 174, .6)",
  secondaryColor30: "rgba(0, 115, 174, .3)",
  secondaryColor15: "rgba(0, 115, 174, .15)",

  light01: "rgba(229, 241, 247, 0.5)",
  light02: "#BFDCEB",
};

export const SIZE = {
  font: 14,
  radius: 12,
  padding: 24,
  margin: 20,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

// export const FONT = {
//   largeTitle: { fontFamily: "Poppins-Black", fontSize: SIZE.largeTitle },
//   h1: { fontFamily: "Poppins-Bold", fontSize: SIZE.h1, lineHeight: 36 },
//   h2: { fontFamily: "Poppins-Bold", fontSize: SIZE.h2, lineHeight: 30 },
//   h3: { fontFamily: "Poppins-SemiBold", fontSize: SIZE.h3, lineHeight: 22 },
//   h4: { fontFamily: "Poppins-SemiBold", fontSize: SIZE.h4, lineHeight: 22 },
//   h5: { fontFamily: "Poppins-SemiBold", fontSize: SIZE.h5, lineHeight: 22 },
//   body1: {
//     fontFamily: "Poppins-Regular",
//     fontSize: SIZE.body1,
//     lineHeight: 36,
//   },
//   body2: {
//     fontFamily: "Poppins-Regular",
//     fontSize: SIZE.body2,
//     lineHeight: 30,
//   },
//   body3: {
//     fontFamily: "Poppins-Regular",
//     fontSize: SIZE.body3,
//     lineHeight: 22,
//   },
//   body4: {
//     fontFamily: "Poppins-Regular",
//     fontSize: SIZE.body4,
//     lineHeight: 22,
//   },
//   body5: {
//     fontFamily: "Poppins-Regular",
//     fontSize: SIZE.body5,
//     lineHeight: 22,
//   },
// };

export default apptheam = { COLORS, SIZE };
