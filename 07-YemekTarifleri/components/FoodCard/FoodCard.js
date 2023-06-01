import { View, Text, Pressable, Image } from 'react-native';
import styles from './FoodCard.style';

function FoodCard({ item, onPressButton }) {

let strMeal="";

if(item.strMeal.length>22){
strMeal=item.strMeal.slice(0, 22)+"...";
}
else{
strMeal=item.strMeal;
}

  return (
    <View>
      <Pressable
        style={styles.container}
        onPress={() => onPressButton(item.strMeal)}>
        <Image
          style={styles.foodImage}
          source={{
            uri: item.strMealThumb,
          }}
        />

        <View style={styles.textView}>
          <Text style={styles.text}>{strMeal}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default FoodCard;
