import {View, Text, StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles'

// type ProductComponentProps = PropsWithChildren<{
//     title: string;
//   }>;
const ProductComponent = () => {
  return (
    <View style={styles.page}>
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg'
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            Clean Code: A Handbook of Agile Software Craftsmanship
          </Text>
          <View style={styles.ratingsContainer}>
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color="#e47911"
            />
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color="#e47911"
            />
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color="#e47911"
            />
            <FontAwesome
              style={styles.star}
              name="star-half-full"
              size={18}
              color="#e47911"
            />
            <FontAwesome
              style={styles.star}
              name="star-o"
              size={18}
              color="#e47911"
            />
            <Text>13,032</Text>
          </View>
          <Text style={styles.price}>from $13.99
          <Text style={styles.oldPrice}> $16.22</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ProductComponent;

