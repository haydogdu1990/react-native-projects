import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {},
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
  },
  foodName: {
    margin: 10,
    marginTop:2,
    marginBottom:2,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#A52A2A',
  },
  foodArea: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A52A2A',
  },
  foodDetail: {
    borderTopWidth:1,
    borderTopColor:"#BDBDBD",
    padding: 10,
  },
  youtubeButton: {
    backgroundColor: '#FF0000',
    alignItems: 'center',
    borderRadius:8,
    margin: 8,
  },
  youtubeText: {
    color: 'white',
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    
  },
});
