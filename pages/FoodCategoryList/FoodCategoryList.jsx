import { View, Text, FlatList, Button } from "react-native";

import useFetch from "../../Hooks/useFetch";

const FoodCategoryList = (props) => {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  function navigateToPage(categoryName) {
    props.navigation.navigate("FoodList", { categoryName });
  }

  const renderFoodCategory = ({ item }) => (
    <View>
      <Text>
        {item.strCategory} {item.idCategory}
      </Text>
      <Button
        title={item.strCategory}
        onPress={() => {
          navigateToPage(item.strCategory);
        }}
      />
    </View>
  );

  return (
    <View>
      <FlatList
        data={data.categories}
        renderItem={renderFoodCategory}
        keyExtractor={(item) => item.idCategory}
      />
    </View>
  );
};

export default FoodCategoryList;
