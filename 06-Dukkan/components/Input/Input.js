import { View, Text, TextInput } from "react-native";
import styles from "./Input.style";

//https://docs.expo.dev/guides/icons/#expovector-icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Input = ({
  placeholder,
  onChangeText,
  value,
  password = false,
  onBlur,
  icon,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.textInput}
        value={value}
        secureTextEntry={password}
        onBlur={onBlur}
      ></TextInput>
      <MaterialCommunityIcons name={icon} size={24} color="#64b5f4" />
    </View>
  );
};

export default Input;
