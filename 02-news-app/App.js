import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
// import Constants from 'expo-constants';

import NewsCard from './components/NewsCard';

import news_data from './data/news_data.json';
import news_banner_data from './data/news_banner_data.json';

// You can import from local files

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export default function App() {
  const renderNews = ({ item }) => (
    <NewsCard
      title={item.title}
      description={item.description}
      imageUrl={item.imageUrl}
      id={item.u_id}
    />
  );

  return (
    <SafeAreaView style={styles.androidSafeArea}>
    <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {news_banner_data.map((bannerNews) => (
              <Image
                style={styles.bannerImage}
                source={{ uri: bannerNews.imageUrl }}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={(item) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText:{
    fontSize:40,
    fontWeight: 'bold',
    margin:15,
  },
  androidSafeArea: {
    flex: 1,

    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',

    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  bannerImage: {
    // height: Dimensions.get('window').height / 6,
    // width: Dimensions.get('window').width / 2,

    height: 80,
    width: 80,
    margin:5,
    borderWidth: 5,
    borderColor: '#006666',
    borderRadius:99,
  },
});
