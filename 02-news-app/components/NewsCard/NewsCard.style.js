
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    
    // justifyContent: 'center',
    
    backgroundColor: '#006666',
    margin:5,
    padding: 8,
    borderRadius:5,
  },
  title:{
    color:"white",
    fontSize:20,
    fontWeight: 'bold',
    margin:5,
  },
  image:{    
    height: Dimensions.get("window").height/4,
    borderRadius:10,
  },
  description:{
    color:"white",
    margin:5,
  },
});
