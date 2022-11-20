/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet, Image, useWindowDimensions, Text} from 'react-native';

export default function OnBoardingItem({item}) {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />

      <View style={{flex: 0.3}}>
        <Text style={styles.tittle}>{item.tittle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },
});
