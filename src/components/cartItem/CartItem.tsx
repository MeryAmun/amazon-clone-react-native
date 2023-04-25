import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles'
import QtySelector from '../qtySelector/QtySelector';
import { DataStore } from 'aws-amplify';
import { CartProduct } from '../../models';

// type ProductComponentProps = PropsWithChildren<{
//     title: string;
//   }>;

interface CartItemProps{
  cartItem:CartProduct
}
const CartItem = ({cartItem}:CartItemProps) => {
  const {product, ...cartProduct } = cartItem;

 // console.log(product?._j?.price)

 const updateQty = async (newQty:number) => {
  const original = await DataStore.query(CartProduct, cartProduct.id)
  await DataStore.save(
CartProduct.copyOf(original, updated => {
  updated.quantity = newQty
})
  )
 }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.subRoot}>
      {
        product?._j?.image  ?   <Image
        style={styles.image}
        source={{uri: product?._j?.image}}
        
      /> : <ActivityIndicator/>
      }
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
           {product?._j?.title}
           
          </Text>
          <View style={styles.ratingsContainer}>
           {
            [0,0,0,0,0].map((el,index) => (
              <FontAwesome
              key={`${product?._j?.id}-${index}`}
              style={styles.star}
              name={ index < Math.floor(product?._j?.avgRating) ? "star" : "star-o" }
              size={18}
              color="#e47911"
            />
           
            ))
           }
            <Text>{product?._j?.rating}</Text>
          </View>
          <Text style={styles.price}>{product?._j?.price.toFixed(2)}
       { product?._j?.oldPrice &&  <Text style={styles.oldPrice}>{product?._j?.oldPrice.toFixed(2)}</Text>}
          </Text>
        </View>
      </View>
    <View style={styles.qtyContainer}>
    <QtySelector quantity={cartProduct.quantity} setQuantity={updateQty}/>
    </View>
    </View>
  );
};
export default CartItem;

