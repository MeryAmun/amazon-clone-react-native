import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

    root: {
      flexDirection: 'row',
      margin: 5,
      borderEndWidth: 1,
      borderColor: '#d1d1d1',
      borderRadius: 10,
      backgroundColor: '#fff',
    },
    image: {
      flex: 2,
      height: 150,
    },
    rightContainer: {
      padding: 10,
      flex: 3,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 18,
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    oldPrice:{
      fontSize:12,
      fontWeight:'normal',
      textDecorationLine:'line-through'
    },
    ratingsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    star: {
      margin: 5,
    },
   
  });
  