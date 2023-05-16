import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './ToDoList.style';

const ToDoList = (props) => {
  const onCheck = (e) => {
    console.log(e);
    props.setToDo({
      ...props.toDo,
      [check]: !props.check,
    });
  };

  return (
    <View style={styles.container}>
    <TouchableOpacity onLongPress={()=>props.onLongDelete(props.id)}>
      {!props.check ? (
        <Text style={styles.text} onPress={()=>props.onCheck(props.id)}>
          {props.id} - {props.todo}
        </Text>
      ) : (
        <Text style={styles.textCheck} onPress={()=>props.onCheck(props.id)}>
          {props.id} - {props.todo}
        </Text>
      )}
      </TouchableOpacity>
    </View>
  );
};

export default ToDoList;
