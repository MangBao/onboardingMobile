import React, {useState, useRef} from 'react';
import {View, FlatList, StyleSheet, Text, Animated} from 'react-native';
import Login from '../../pages/Login';
import slides from '../../slides';
import OnBoardingItem from './OnBoardingItem';

export default OnBoarding = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const nextPress = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate(Login)
    }
  };

  let count = 0;

  slides.forEach(e => {
    count++;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({item, index}) => (
          <OnBoardingItem
            item={item}
            index={index}
            count={count}
            nextPress={nextPress}
            slides={slides}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
