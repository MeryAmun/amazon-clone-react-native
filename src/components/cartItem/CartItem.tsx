import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles'
import QtySelector from '../qtySelector/QtySelector';

// type ProductComponentProps = PropsWithChildren<{
//     title: string;
//   }>;

interface CartItemProps{
  cartItem:{
    id:string,
    quantity:number,
    option?:string,
    product:{
      id: string,
      title: string,
      image?:string,
      avgRating:number,
      rating?:number,
      price:number,
      oldPrice?:number
  }
  }
}
const CartItem = ({cartItem}:CartItemProps) => {
  const {product, quantity } = cartItem;
  const [qty, setQty] = useState(quantity)
  console.log(product,'chebs')
  return (
    <View style={styles.rootContainer}>
      <View style={styles.subRoot}>
      {
        product.image  ?   <Image
        style={styles.image}
        source={{uri: product.image}}
        
      /> : <ActivityIndicator/>
      }
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
           {product.title}
           
          </Text>
          <View style={styles.ratingsContainer}>
           {
            [0,0,0,0,0].map((el,index) => (
              <FontAwesome
              key={`${product.id}-${index}`}
              style={styles.star}
              name={ index < Math.floor(product.avgRating) ? "star" : "star-o" }
              size={18}
              color="#e47911"
            />
           
            ))
           }
            <Text>{product.rating}</Text>
          </View>
          <Text style={styles.price}>{product.price}
       { product.oldPrice &&  <Text style={styles.oldPrice}>{product.oldPrice}</Text>}
          </Text>
        </View>
      </View>
    <View style={styles.qtyContainer}>
    <QtySelector quantity={qty} setQuantity={setQty}/>
    </View>
    </View>
  );
};
export default CartItem;

