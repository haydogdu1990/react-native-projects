import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',

    backgroundColor: '#FFE6C7',
    margin: 5,
    padding: 8,
    borderRadius: 5,
  },
  containerTop:{

  },
  containerBottom:{

  },
  title: {
    color: '#FF6000',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  image: {
    height: Dimensions.get('window').height / 4,

    borderRadius: 10,
  },
  price:{
    fontWeight: 'bold',
    color: 'grey',
    marginLeft: 5,
  },
  inStock: {
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 5,
  },
});
