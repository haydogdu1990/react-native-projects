import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';

import ToDoList from './components/ToDoList';

export default function App() {
  const [text, setText] = useState('');

  const [counter, setCounter] = useState(0);

  const [toDo, setToDo] = useState([]);

  const [idi, setIdi] = useState(toDo.length > 0 ? toDo.length : 1);

  const renderToDo = ({ item }) => (
    <ToDoList
      id={item.id}
      todo={item.todo}
      check={item.check}
      onCheck={(id) => handleUpdateTodo(id)}
      onLongDelete={(id) => handleDeleteTodo(id)}
    />
  );

  const handleAddTodo = () => {
    setCounter(counter + 1);
    setToDo([...toDo, { id: idi, todo: text, check: false }]);
    setIdi(idi + 1);
    setText('');
  };

  const handleUpdateTodo = (id) => {
    console.log(id);
    setToDo(
      toDo.map((to) => {
        if (to.id === id && to.check === false) {
          setCounter(counter - 1);
          return { ...to, check: true };
        } else if (to.id === id && to.check === true) {
          setCounter(counter + 1);
          return { ...to, check: false };
        } else {
          return to;
        }
      })
    );
  };
  const handleDeleteTodo = (id) => {
    console.log('delete ' + id);

    setToDo(toDo.filter((to) => to.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.toptext}>Yapılacaklar</Text>
        <Text style={styles.toptext}>{counter}</Text>
        
      </View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={toDo}
        renderItem={renderToDo}
      />
      <View>
        
        <TextInput
          style={styles.searchInput}
          placeholder="Yapılacaklar..."
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <Button style={styles.button} title="submit" onPress={handleAddTodo} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  topContainer:{
    
    flexDirection: "row",
    justifyContent:"space-between",
    padding:20,

  },
  toptext:{
    fontSize: 30,
    fontWeight:"bold",
  },
  searchInput: {
    height: 40,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,

    
    fontSize: 20,
  },
  button: {
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,

    fontWeight: 'bold',
    fontSize: 20,
  },
});
