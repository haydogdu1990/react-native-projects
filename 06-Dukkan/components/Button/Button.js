import { View, Text, Pressable } from "react-native";
import styles from "./Button.style";

const Button = ({ text, onPress, disabled }) => {
  return (
    <Pressable style={styles.button} onPress={onPress} disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
