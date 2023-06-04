import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./Login.style";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/loginlogo.png")}
        />
      </View>
      <View style={styles.bodyContainer}>
        <Input placeholder="Kullanıcı Adınızı Giriniz..." />
        <Input placeholder="Şifrenizi Giriniz..." />
        <Button text="Giriş Yap" />
      </View>
    </View>
  );
};

export default Login;
