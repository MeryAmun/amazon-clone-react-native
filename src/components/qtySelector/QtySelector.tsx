import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import React from 'react';

interface QuantityProps {
    quantity:number,
    setQuantity:Function
    
}


const QtySelector = ({quantity,setQuantity}
    :QuantityProps) => {

const onAdd = () => {
    setQuantity( quantity + 1)
}
 const onSubtract = () => {
    if(quantity >= 0){
        setQuantity(Math.max(0,  quantity - 1))
    }
  }




  return (
    <View style={styles.root}>
     <Pressable onPress={onSubtract} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Text style={styles.qty}>{quantity}</Text>
      <Pressable onPress={onAdd} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  )
}

export default QtySelector