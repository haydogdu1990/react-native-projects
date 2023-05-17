import { Text, SafeAreaView, View, TextInput } from 'react-native';

import styles from "./Input.style"

function Input({label, placeholder,onChangeText}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        
      />
    </View>
  );
}

export default Input;
