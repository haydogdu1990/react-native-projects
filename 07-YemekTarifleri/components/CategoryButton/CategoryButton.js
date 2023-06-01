import { View, Text, Pressable, Image } from 'react-native';

import styles from './CategoryButton.style';

function CategoryButton({ item, onPressButton }) {
  return (
    <View>
      <Pressable style={styles.container} onPress={() => onPressButton(item.strCategory)}>
      <Image  style={styles.categoryImage}
        source={{
          uri:item.strCategoryThumb
        }}/>
        <Text style={styles.text}>
        {item.strCategory} 
        
      </Text>
      </Pressable>
    </View>
  );
}

export default CategoryButton;
