import * as React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView,TextInput } from 'react-native';
import Constants from 'expo-constants';

import StoreCard from './components/StoreCard';

import store_data from './data.json';

export default function App() {
  const renderStore = ({ item }) => (
    <StoreCard
      id={item.id}
      title={item.title}
      imgURL={item.imgURL}
      price={item.price}
      inStock={item.inStock}
    />
  );

  const searchInput = ({ item }) => (
    <TextInput style={styles.searchInput} placeholder="Ara..."/>
  );

  return (
    <SafeAreaView style={styles.container}>
    <View><Text style={styles.title}>PATIKASTORE</Text></View>
      <FlatList
        ListHeaderComponent={searchInput} //flatlist öncesi
        keyExtractor={(item) => item.id.toString()}
        data={store_data}
        renderItem={renderStore}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#454545',
    padding: 8,
  },
  title:{
    padding:10,
    fontSize:25,
    fontWeight:"bold",
    color:"#FF6000"
  },

  searchInput:{
    height: 40,
    margin: 5,
    backgroundColor:"#FFE6C7",
    borderRadius:5,
    padding: 10,
    color:"#FF6000",
    fontWeight:"bold",
    fontSize:20,
  }
});
