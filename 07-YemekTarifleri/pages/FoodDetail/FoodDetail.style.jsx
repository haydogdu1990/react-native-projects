import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {},
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3,
  },
});
