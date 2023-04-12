import { View, StyleSheet,FlatList } from 'react-native'
import { ProductItem } from '../../components'
import products from '../../data/products'

interface HomeScreenProps{
  searchTerm:string,
  }

const HomeScreen = ({searchTerm}:HomeScreenProps) => {
  console.log(searchTerm)
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