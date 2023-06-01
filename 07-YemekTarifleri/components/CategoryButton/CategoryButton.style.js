import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop:10,
    marginLeft:10,
    marginRight:10,
    backgroundColor:"white",
    borderRadius:10,
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50,
  },
  categoryImage: {
    margin:10,
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 40,
    
  },
  text: {
    padding:10,
    fontSize:20,
    fontWeight:"bold",
  },
});
