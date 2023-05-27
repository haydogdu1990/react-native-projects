import React from "react";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

import { View, Text, FlatList, ActivityIndicator } from "react-native";

import { API_URL } from "react-native-dotenv";

import styles from "./Product.style";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";

function Product({ navigation }) {
  const { data, loading, error } = useFetch(API_URL);

  const handleProductSelect = (id) => {
    navigation.navigate("DetailPage", { id });
  };

  const renderProduct = ({ item }) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
}

export default Product;
