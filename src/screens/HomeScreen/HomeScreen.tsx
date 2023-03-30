import { View, Text,FlatList } from 'react-native'
import { ProductItem } from '../../components'
import products from '../../data/products'


const HomeScreen = ()=> {
  return (
    <View>
      <FlatList
        //  keyExtractor={({id}) => id}
           data={products}
           renderItem={({item}) => <ProductItem item={item}/>}/>
    </View>
  )
}
export default HomeScreen