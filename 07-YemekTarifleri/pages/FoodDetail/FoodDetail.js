import { View, Text, FlatList, Image, Button, Linking, Pressable } from 'react-native';

import useFetch from '../../Hooks/useFetch';

import styles from './FoodDetail.style';

const FoodDetail = (props) => {
  const { foodName } = props.route.params;

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
  );
  console.log(data.meals);

  const renderFoodDetail = ({ item }) => (
    <View>
      <Image style={styles.image} source={{ uri: item.strMealThumb }} />
      <Text style={styles.foodName}>{item.strMeal}</Text>
      <Text style={styles.foodArea}>{item.strArea}</Text>

      <Text style={styles.foodDetail}>{item.strInstructions}</Text>
      <Pressable
      style={styles.youtubeButton}
        title={item.strMeal}
        onPress={() => {
          Linking.openURL(item.strYoutube);
        }}
      ><Text style={styles.youtubeText}>Watch on Youtube</Text></Pressable>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data.meals}
        renderItem={renderFoodDetail}
        keyExtractor={(item) => item.idMeal}
      />
    </View>
  );
};

export default FoodDetail;
