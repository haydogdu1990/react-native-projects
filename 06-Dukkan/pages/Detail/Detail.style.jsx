import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 10,
  },
  desc: { fontSize: 16, padding: 10 },

  price: { fontWeight: "bold", fontSize: 20, padding: 10, textAlign: "right" },
});
