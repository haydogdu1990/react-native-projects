import { SafeAreaView, View, Text, Image, Pressable } from "react-native";

import styles from "./ProductCard.style";

function ProductCard({ product, onSelect }) {
  return (
    <Pressable style={styles.container} onPress={onSelect}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </Pressable>
  );
}

export default ProductCard;
