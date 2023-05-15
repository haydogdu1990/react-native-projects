import {View, Image, Text} from "react-native";
import styles from "./StoreCard.style";

const StoreCard = (props) =>{
  return(
    <View style={styles.container}>
    <View style={styles.containerTop}>
      <Image style={styles.image} source={{uri: props.imgURL}}/>
      <Text style={styles.title}>{props.title}</Text>
</View>
      <View style={styles.containerBottom}>
      <Text style={styles.price}>{props.price}</Text>
      {!props.inStock && <Text style={styles.inStock}>STOKTA YOK</Text>}
      </View>
     
      
      
    </View>
  )
}

export default StoreCard;