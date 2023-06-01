import { View, Text, FlatList, Image, Button } from 'react-native';

import useFetch from '../../Hooks/useFetch';
import FoodCard from '../../components/FoodCard/FoodCard';

import styles from './FoodList.style';

const FoodList = (props) => {
  const { categoryName } = props.route.params;

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );
  console.log(data.meals);

  function navigateToPage(foodName) {
    props.navigation.navigate('FoodDetail', { foodName });
  }

  const renderFoodList = ({ item }) => (
    <FoodCard item={item} onPressButton={(i) => navigateToPage(i)} />
  );

  return (
    <View style={styles.container}>
      
      <FlatList
        data={data.meals}
        renderItem={renderFoodList}
        keyExtractor={(item) => item.idMeal}
      />
    </View>
  );
};

export default FoodList;
