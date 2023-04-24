import {View, Text, FlatList, StyleSheet,ActivityIndicator} from 'react-native';
import React,{useState, useEffect} from 'react';
import {Buttons, CartItem} from '../../components';
import cart from '../../data/cart';
import { useNavigation } from '@react-navigation/native';
import { DataStore,Auth } from 'aws-amplify';
import { CartProduct, Product } from '../../models';
import products from '../../data/products';

const ShoppingCart = () => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const navigation = useNavigation()
  const totalPrice = 0
  // const totalPrice = cart.reduce(
  //   (total, initialValue) =>
  //     total + initialValue.item.price * initialValue.quantity,
  //   0,
  // );



  useEffect(() => {
    const fetchCartData = async () => {
    // const userData = await Auth.currentAuthenticatedUser();
    // if(!cartProducts.length || !userData){
    //   return;
    // }
   await DataStore.query(CartProduct).then(setCartProducts)
  }
  fetchCartData()
   
  }, [])


  useEffect(() => {
    if(cartProducts.filter(cp => !cp.product).length === 0){
      return;
    }
    const fetchProducts = async () => {
      //query all products that are used in cart
   const products = await Promise.all(
    cartProducts.map((cartProduct) => DataStore.query(Product, cartProduct.productID)
    )
   );
   
   setCartProducts(currentCartProducts =>
    currentCartProducts.map(cartProduct => ({
      ...cartProduct,
      product:products.find(p => p.id === cartProduct.productID)
    }))
   )

  }
  fetchProducts()
 
  }, [cartProducts])

  const handleCheckout = () => {
    navigation.navigate("AddressScreen")
     }

     if(cartProducts.filter(cp => !cp.product).length !== 0){
      return <ActivityIndicator/>
    }
  return (
    <View>
      <FlatList
        //  keyExtractor={({id}) => id}
        data={cartProducts}
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
          onButtonPress={handleCheckout}
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
