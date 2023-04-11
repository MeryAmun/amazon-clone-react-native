import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {Buttons, CartItem} from '../../components';
import cart from '../../data/cart';

const ShoppingCart = () => {
  const totalPrice = cart.reduce(
    (total, initialValue) =>
      total + initialValue.item.price * initialValue.quantity,
    0,
  );

  return (
    <View>
      <FlatList
        //  keyExtractor={({id}) => id}
        data={cart}
        renderItem={({item}) => <CartItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
        <Text style={styles.subTotalTitle}>
          Subtotal ({cart.length} items):{' '}
          <Text style={styles.subTotalPrice}>{totalPrice.toFixed(2)}$</Text>
        </Text>
        <Buttons
          text="Proceed to checkout"
          onButtonPress={() => {
            console.log('go to checkout');
          }}
          containerStyles={{
            backgroundColor:'#f7e300',
            borderColor:'#c7b782'
          }}
        />
      </View>
        )}
      />
    </View>
  );
};

export default ShoppingCart;
const styles = StyleSheet.create({
  subTotalTitle: {
    fontSize: 18,
  },
  subTotalPrice: {
    color: '#e47911',
    fontWeight: 'bold',
  },
});
