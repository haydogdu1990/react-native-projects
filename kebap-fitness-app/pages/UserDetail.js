import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

function UserDatail(props) {
  const { user } = props.route.params;

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Kullanıcı Bilgileri</Text>
      <Text style={styles.text}>Adı: {user.name}</Text>
      <Text style={styles.text}>Soyadı: {user.surname}</Text>
      <Text style={styles.text}>Yaşı: {user.age}</Text>
      <Text style={styles.text}>E-Posta: {user.email}</Text>
    </SafeAreaView>
  );
}

export default UserDatail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 22,
    // alignItems: 'center',
  },
  text: {
    fontSize: 22,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#2D033B',
    margin:10,
  },
});
