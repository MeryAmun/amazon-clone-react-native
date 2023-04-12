import {View, Text, Pressable, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';

// type ProductComponentProps = PropsWithChildren<{
//     title: string;
//   }>;

interface ProductItemProps{
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
const ProductItem = ({item}:ProductItemProps) => {
  const navigation = useNavigation()
 const handlePress = () => {
console.log(item.title)
navigation.navigate("ProductScreen",{id:item.id})
 }
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.root}>
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
    </Pressable>
  );
};
export default ProductItem;

