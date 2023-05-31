import { View, Text, FlatList, Image, Button } from "react-native";

import useFetch from "../../Hooks/useFetch";

import styles from "./FoodList.style";

const FoodList = (props) => {
  const { categoryName } = props.route.params;

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );
  console.log(data.meals);

  function navigateToPage(foodName) {
    props.navigation.navigate("FoodDetail", { foodName });
  }

  const renderFoodList = ({ item }) => (
    <View>
      <Image style={styles.image} source={{ uri: item.strMealThumb }} />
      <Text>{item.strMeal}</Text>

      <Button
        title={item.strMeal}
        onPress={() => {
          navigateToPage(item.strMeal);
        }}
      />
    </View>
  );

  return (
    <View>
      <Text style={styles.text}>FoodList</Text>
      <FlatList
        data={data.meals}
        renderItem={renderFoodList}
        keyExtractor={(item) => item.idMeal}
      />
    </View>
  );
};

export default FoodList;
