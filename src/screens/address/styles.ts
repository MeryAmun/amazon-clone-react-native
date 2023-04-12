import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  row: {
    marginVertical:5
  },
  label: {
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 2,
    height: 40,
  },
 errorLabel:{
   color:'red' 
 }
});
