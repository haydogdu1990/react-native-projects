import { View, Text, Pressable, ActivityIndicator } from "react-native";
import styles from "./Button.style";

const Button = ({ text, onPress, disabled, loading }) => {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="white" size="large" />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </Pressable>
  );
};

export default Button;
