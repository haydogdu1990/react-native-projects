import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

import Button from "../components/Button"

function Welcome(props) {
  function onToMemberSing() {
    console.log(props);
    props.navigation.navigate('MemberScreen', {});
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Kebap Fitness Salonu</Text>
      <Button text="Üye Kaydı Oluştur" onPress={onToMemberSing}/>
    </SafeAreaView>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    
    
    alignItems:"center",
  },
  header:{
    
    fontSize:30,
    fontWeight:"bold",
    margin:10,
  },
  text: {
    fontSize: 20,
  },
 
});
