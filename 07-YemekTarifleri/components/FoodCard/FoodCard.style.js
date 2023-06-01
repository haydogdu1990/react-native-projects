import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {},
  foodImage: {
    marginTop: 10,
    marginHorizontal: 10,

    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
  },
  textView: {
    position: 'absolute',

    left: 10,
    right: 10,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 5,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    
  },
});
