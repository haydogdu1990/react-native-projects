import { View, Text, TextInput } from "react-native";
import styles from "./Input.style";

const Input = ({ placeholder, onChangeText }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={styles.textInput}
    ></TextInput>
  );
};

export default Input;
