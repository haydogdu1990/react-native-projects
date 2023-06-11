import React from "react";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

import { View, Text, FlatList, ActivityIndicator, Button } from "react-native";

import { API_PRODUCT_URL } from "react-native-dotenv";

import { useDispatch } from "react-redux";
import { reomveUser } from "../../context/auth/authSlice";

import styles from "./Product.style";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";

function Product({ navigation }) {
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(API_PRODUCT_URL);

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
      <Button title="Çıkış" onPress={() => dispatch(reomveUser())} />
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
}

export default Product;
