import React, {useState } from 'react'
import { Text, ScrollView } from 'react-native'
import product from '../../data/product'
import {Picker} from '@react-native-picker/picker';
import { styles } from './styles'
import { Buttons, ImageCarousel, QtySelector } from '../../components';


const ProductScreen = () => {
    const [option, setOption] = useState(product.options ? product.options[0] : null);
    const [qty, setQty] = useState(1);

    const handlePress = () => {
console.log('press')
    }
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
    {/* image carousel */}
    <ImageCarousel images={product.images}/>
    <Picker
  selectedValue={option}
  onValueChange={(itemValue, itemIndex) =>
    setOption(itemValue)}
  >
{
    product.options.map((option,index) => (
        <Picker.Item label={option} value={option} key={index} />
    ))
}
</Picker>
    <Text style={styles.price}>{product.price}
       { product.oldPrice &&  <Text style={styles.oldPrice}>{product.oldPrice}</Text>}
          </Text>
   <Text style={styles.description}>
    {product.description}
   </Text>
    {/* qty selector*/}
    <QtySelector quantity={qty} setQuantity={setQty}/>
    {/* buttons*/}
    <Buttons text='Add To Cart' onButtonPress=
    {handlePress}
    containerStyles={{backgroundColor:'#e3c905'}}
    />
    <Buttons text='Buy Now' onButtonPress={() => console.log('buy now')}/>
    </ScrollView>
  )
}

export default ProductScreen

