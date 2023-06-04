import { Text } from "react-native";
import styles from "./ErrorMessage.style";

const ErrorMessage = ({ errmessage }) => {
  return <Text style={styles.text}>{errmessage}</Text>;
};

export default ErrorMessage;
