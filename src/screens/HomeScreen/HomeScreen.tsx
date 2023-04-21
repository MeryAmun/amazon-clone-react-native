import { View, StyleSheet,FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ProductItem } from '../../components'
//import products from '../../data/products';
import { DataStore } from 'aws-amplify';
import { Product } from '../../models';

interface HomeScreenProps{
  searchTerm:string,
  }

const HomeScreen = ({searchTerm}:HomeScreenProps) => {
 const [products, setProducts] = useState<Product[]>([]);

 useEffect(() => {
  DataStore.query(Product).then(setProducts)
// const fetchProducts = async () => {
//   const results = await DataStore.query(Product);
//  setProducts(results)
// }
// fetchProducts()
 }, [])
 
  return (
    <View style={styles.root}>
      <FlatList
        //  keyExtractor={({id}) => id}
           data={products}
           renderItem={({item}) => <ProductItem item={item}/>}
           showsVerticalScrollIndicator={false}
           />
    </View>
  )
}
export default HomeScreen;
const styles = StyleSheet.create({
  root:{
    padding:10
  }
})

// you already know that am not a scammer who will collect money and disappear   so you should not be so strict with payment