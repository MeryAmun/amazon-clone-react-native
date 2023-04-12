import { View, StyleSheet,FlatList } from 'react-native'
import { ProductItem } from '../../components'
import products from '../../data/products'


const HomeScreen = ()=> {
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