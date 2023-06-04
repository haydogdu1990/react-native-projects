import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#64b5f4",
  },
  logoContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    flex: 8,
  },
  logo: {
    height: Dimensions.get("window").height / 7,
    width: Dimensions.get("window").width * 0.9,
    resizeMode: "contain",

    tintColor: "white",
  },

  text: {},
});
