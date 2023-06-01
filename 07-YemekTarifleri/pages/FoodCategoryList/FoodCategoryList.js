import { View, Text, FlatList, Button } from 'react-native';

import useFetch from '../../Hooks/useFetch';
import CategoryButton from '../../components/CategoryButton';

import styles from "./FoodCategoryList.style"

const FoodCategoryList = (props) => {
  const { data, loading, error } = useFetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );

  function navigateToPage(categoryName) {
    console.log(categoryName);
    props.navigation.navigate('FoodList', { categoryName });
  }

  const renderFoodCategory = ({ item }) => (
    <CategoryButton item={item} onPressButton={(i) => navigateToPage(i)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.categories}
        renderItem={renderFoodCategory}
        keyExtractor={(item) => item.idCategory}
      />
    </View>
  );
};

export default FoodCategoryList;
