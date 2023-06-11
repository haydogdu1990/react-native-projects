import React from "react";
import { View, Text, Image } from "react-native";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

import useFetch from "../../hooks/useFetch/useFetch";
import { API_PRODUCT_URL } from "react-native-dotenv";

import styles from "./Detail.style";

function Detail({ route }) {
  const { id } = route.params;
  const { data, loading, error } = useFetch(API_PRODUCT_URL + `/${id}`);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image }} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.desc}>{data.description}</Text>
      <Text style={styles.price}>${data.price}</Text>
    </View>
  );
}

export default Detail;
