import { View, Text, TouchableOpacity,Alert } from 'react-native';

import styles from './Card.style';

const Card = (props) => {
  const createButtonAlert = () =>
    Alert.alert('Beğeni', props.title+' "'+props.body+'" sözü beğenilerinize eklensin mi?', [
      {
        text: 'Hayır',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Evet', onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.body}</Text>
      </View>
      <TouchableOpacity onPress={createButtonAlert}><View style={styles.bottom_container}>
        <Text style={styles.button_title}>I LIKED</Text>
      </View></TouchableOpacity>
    </View>
  );
};

export default Card;
