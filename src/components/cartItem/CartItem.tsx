import {View, Text, StyleSheet, Image} from 'react-native';
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
    item:{
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
  const {item, quantity } = cartItem;
  const [qty, setQty] = useState(quantity)
 
  return (
    <View style={styles.rootContainer}>
      <View style={styles.subRoot}>
        <Image
          style={styles.image}
          source={{uri: item.image}}
          
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
           {item.title}
           
          </Text>
          <View style={styles.ratingsContainer}>
           {
            [0,0,0,0,0].map((el,index) => (
              <FontAwesome
              key={`${item.id}-${index}`}
              style={styles.star}
              name={ index < Math.floor(item.avgRating) ? "star" : "star-o" }
              size={18}
              color="#e47911"
            />
           
            ))
           }
            <Text>{item.rating}</Text>
          </View>
          <Text style={styles.price}>{item.price}
       { item.oldPrice &&  <Text style={styles.oldPrice}>{item.oldPrice}</Text>}
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

