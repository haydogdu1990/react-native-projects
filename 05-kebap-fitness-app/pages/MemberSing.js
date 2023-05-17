import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Alert } from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

function MemberSing(props) {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [age, satAge] = useState(null);
  const [email, setEmail] = useState(null);
  //onChangeText={text=>setName(text)}

  function handleSubmit() {
    if (!name || !surname || !age || !email) {
      Alert.alert('Kebap Fitness Salonu', 'Bilgiler boş bırakılamaz');
    } else {
      const user = {
        name,
        surname,
        age,
        email,
      };
      //name:name;

      props.navigation.navigate('UserDetailScreen', { user });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Input
        label="Adınız"
        placeholder="Adınızı giriniz..."
        onChangeText={setName}
      />

      <Input
        label="Soyadınız"
        placeholder="Soyadınız giriniz..."
        onChangeText={setSurname}
      />
      <Input
        label="Yaşınız"
        placeholder="Yaşınızı giriniz..."
        onChangeText={satAge}
      />
      <Input
        label="E-Posta Adresiniz"
        placeholder="E-Posta adresinizi giriniz..."
        onChangeText={setEmail}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

export default MemberSing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',

    // alignItems:"center",
  },
});
