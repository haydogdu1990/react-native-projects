import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    borderWidth: 0,
    backgroundColor: "#526D82",
    borderColor: "#bdbdbd",
    margin: 5,
    borderRadius: 20,
    flexDirection: "row",
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  body_container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#DDE6ED",
    padding: 2,
  },
  price: {
    textAlign: "right",
    fontSize: 20,
    fontStyle: "italic",
    color: "#DDE6ED",
    fontWeight: "bold",
    padding: 5,
  },
});
