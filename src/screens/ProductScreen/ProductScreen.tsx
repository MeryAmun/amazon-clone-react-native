import React, {useState, useEffect} from 'react';
import {Text, ScrollView,ActivityIndicator} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';
import {Buttons, ImageCarousel, QtySelector} from '../../components';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DataStore,Auth } from 'aws-amplify';
import { Product,CartProduct } from '../../models';



const ProductScreen = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined)
  const [option, setOption] = useState<string| undefined>(undefined);
  const [qty, setQty] = useState(1);
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    if(!route.params?.id){
      return;
    }
   DataStore.query(Product, route.params?.id).then(setProduct)
  }, [route.params?.id])


  useEffect(() => {
   if(product?.options){
    setOption(product.options[0])
   }
  }, [product])
  
  if(!product){
    return <ActivityIndicator/>
  }
  
  const handlePress = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    if(!product || !userData){
      return;
    }
 
    const newCartProduct = new CartProduct({
      userSub:userData?.attributes.sub,
      quantity:qty,
      option,
      productID:product.id
    });
    await DataStore.save(newCartProduct);
    navigation.navigate("ShoppingCartStack")
  };
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      {/* image carousel */}
      <ImageCarousel images={product.images} />
      <Picker
        selectedValue={option}
        onValueChange={(itemValue, itemIndex) => setOption(itemValue)}>
        {product.options?.map((option, index) => (
          <Picker.Item label={option} value={option} key={index} />
        ))}
      </Picker>
      <Text style={styles.price}>
        from ${product.price?.toFixed(2)}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>{product.oldPrice.toFixed(2)}</Text>
        )}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      {/* qty selector*/}
      <QtySelector quantity={qty} setQuantity={setQty} />
      {/* buttons*/}
      <Buttons
        text="Add To Cart"
        onButtonPress={handlePress}
        containerStyles={{backgroundColor: '#e3c905'}}
      />
      <Buttons text="Buy Now" onButtonPress={() => console.log('buy now')} />
    </ScrollView>
  );
};

export default ProductScreen;
