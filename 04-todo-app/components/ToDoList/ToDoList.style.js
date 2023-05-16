
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    
    
  },
  
  text:{    
    backgroundColor: '#E3F4F4',
    margin:5,
    padding: 8,
    
    fontSize: 20,
    
    borderRadius:10,
  },

  textCheck:{
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",

    backgroundColor:"#C4DFDF",
    fontSize: 20,
    margin:5,
    padding: 8,
    borderRadius:5,
  }
  
});
