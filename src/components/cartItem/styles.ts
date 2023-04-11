import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rootContainer: {
  
    margin: 5,
      borderEndWidth: 1,
      borderColor: '#d1d1d1',
      borderRadius: 10,
      backgroundColor: '#fff',
  },
    subRoot: {
      flexDirection: 'row',
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
    qtyContainer:{
marginLeft:30,
marginVertical:10
    },
    star: {
      margin: 5,
    },
   
  });
  