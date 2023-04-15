import {View, Text, FlatList, StyleSheet,Pressable} from 'react-native';
import React from 'react';
import {Buttons, CartItem} from '../../components';
import cart from '../../data/cart';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const UserScreen = () => {



const signOut = async () =>  {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}
  const navigation = useNavigation()
  const totalPrice = cart.reduce(
    (total, initialValue) =>
      total + initialValue.item.price * initialValue.quantity,
    0,
  );

  const handleCheckout = () => {
    navigation.navigate("AddressScreen")
     }
  return (
    <View>
       <Buttons
          text="Sign Out"
          onButtonPress={signOut}
          containerStyles={{
            backgroundColor:'#f7e300',
            borderColor:'#c7b782',
            fontSize: 18,
          }}
        />
      <FlatList
        //  keyExtractor={({id}) => id}
        data={cart}
        renderItem={({item}) => <CartItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default UserScreen;
const styles = StyleSheet.create({
  subTotalTitle: {
    fontSize: 18,
  },
  subTotalPrice: {
    color: '#e47911',
    fontWeight: 'bold',
  },
});
