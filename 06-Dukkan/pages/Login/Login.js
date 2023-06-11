import React from "react";
import { View, Text, Image, Alert } from "react-native";

import { Formik } from "formik";
import * as yup from "yup";

import styles from "./Login.style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ErrorMessage from "../../components/ErrorMessage";
import usePost from "../../hooks/usePost";
import { API_AUTH_URL } from "react-native-dotenv";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../context/auth/authSlice";
import { setAuthLoading } from "../../context/auth/authLoading";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const userValue = useSelector((state) => state.user.value);
  console.log("redux data", userValue);

  const { data, loading, error, post } = usePost();

  function handleLogin(values) {
    post(API_AUTH_URL, values);
    //console.log("data ", data);
    //console.log("Error ", error);
  }

  if (error) {
    Alert.alert("Dükkan", error.message);
  }

  if (data) {
    dispatch(setUser(data));
    dispatch(setAuthLoading(false));
    navigation.navigate("ProductPage");

    //https://youtu.be/jaj26U2ojZA?t=361
  } else {
    AsyncStorage.removeItem("@user");
  }

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem("@user");
      return jsonData != null ? JSON.parse(jsonData) : null;
    } catch (e) {
      // error reading value
    }
  };

  async function test() {
    const res = await getData();
    console.log("Test", res);
  }
  //test();

  //username: 'kminchelle',
  //password: '0lelplR',

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/loginlogo.png")}
        />
      </View>
      <Formik
        initialValues={{ username: "", password: "" }}
        //onSubmit={(values) => handleLogin(values)} veya
        onSubmit={handleLogin}
        validationSchema={yup.object().shape({
          username: yup.string().required("Lütfen kullanıcı adınızı giriniz!"),
          //email: yup.string().email().required(),
          password: yup
            .string()
            //.min(4, "Şifre 4 karakteri geçmelidir!")
            //.max(10, "Şifre 10 karakteri geçmemelidir!")
            .required("Lütfen şifrenizi giriniz!"),
        })}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          setFieldTouched,
          touched,
          isValid,
        }) => (
          <View style={styles.bodyContainer}>
            <Input
              placeholder="Kullanıcı Adınızı Giriniz..."
              value={values.username}
              onChangeText={handleChange("username")}
              onBlur={() => setFieldTouched("username")}
              icon="account"
            />
            {touched.username && errors.username && (
              <ErrorMessage errmessage={errors.username} />
            )}
            <Input
              placeholder="Şifrenizi Giriniz..."
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              password
              icon="key"
            />
            {touched.password && errors.password && (
              <ErrorMessage errmessage={errors.password} />
            )}

            <Button
              text="Giriş Yap"
              onPress={handleSubmit}
              disabled={!isValid}
              loading={loading}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
