import React from "react";
import { View, Text, Image } from "react-native";

import { Formik } from "formik";
import * as yup from "yup";

import styles from "./Login.style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ErrorMessage from "../../components/ErrorMessage";

const Login = () => {
  function handleLogin(values) {
    console.log(values);
  }

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
          username: yup.string().required("Please, provide your name!"),
          //email: yup.string().email().required(),
          password: yup
            .string()
            .min(4)
            .max(10, "Password should not excced 10 chars.")
            .required(),
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
            />
            {touched.password && errors.password && (
              <ErrorMessage errmessage={errors.password} />
            )}

            <Button
              text="Giriş Yap"
              onPress={handleSubmit}
              disabled={!isValid}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
