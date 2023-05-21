import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";

import { API_URL } from "react-native-dotenv";

import axios from "axios";

import styles from "./Product.style";
import ProductCard from "../../components/ProductCard";

function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: productData } = await axios.get(API_URL);
    setData(productData);
  };

  const renderProduct = ({ item }) => <ProductCard product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
}

export default Product;
