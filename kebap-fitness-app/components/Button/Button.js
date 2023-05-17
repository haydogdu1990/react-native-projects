import React from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from "./Button.style"

function Button(props) {
  const { onPress, text = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

export default Button;
