
import {View, Image, Text} from "react-native";
import styles from "./NewsCard.style";

const NewsCard = (props) =>{
  return(
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.imageUrl}}/>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
      
    </View>
  )
}

export default NewsCard;