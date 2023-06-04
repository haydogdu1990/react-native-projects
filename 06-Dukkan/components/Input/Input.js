import { View, Text, TextInput } from "react-native";
import styles from "./Input.style";

const Input = ({
  placeholder,
  onChangeText,
  value,
  password = false,
  onBlur,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={styles.textInput}
      value={value}
      secureTextEntry={password}
      onBlur={onBlur}
    ></TextInput>
  );
};

export default Input;
