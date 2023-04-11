import {
  View,
  Image,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useCallback} from 'react';
interface ImageProps {
  images: string[];
}
const ImageCarousel = ({images}: ImageProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;

  const onCarouselImageChange = useCallback(({viewableItems}) => {
    if(viewableItems.length > 0) {
      setActiveIndex(viewableItems[0]?.index || 0)
    }
    // console.log(viewableItems)
}, [])
  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            source={{uri: item}}
            style={[styles.image, {width: windowWidth - 20}]}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment="center"
        decelerationRate={'fast'}
        viewabilityConfig={{
          waitForInteraction: true,
            viewAreaCoveragePercentageThreshold:50,
            itemVisiblePercentThreshold: 50
        }}
        onViewableItemsChanged={onCarouselImageChange }
      />
      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed',
              },
            ]}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  root: {},
  image: {
    margin: 10,
    height: 250,
    resizeMode: 'contain',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#ededed',
    borderColor: '#c9c9c9',
    margin: 5,
  },
});
