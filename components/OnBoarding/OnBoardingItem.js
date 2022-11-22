import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  Text,
} from 'react-native';
import NextPress from './NextPress';

export default OnBoardingItem = ({item, index, count, scrollTo}) => {
  const {width} = useWindowDimensions();
  const [txtButton, setTxtButton] = useState('Next');
  
  useEffect(() => {
    if(index+1 === count) {
      setTxtButton('Get Started');
    }
  }, [item])

  const nextPress = () => {

  }

  return (
    <View style={[styles.container, {width}]} id={index+1}>
      <View style={styles.count}>
        <Text style={styles.textCount}>
          {index+1}/{count}
        </Text>
        <Text style={styles.textCount}>Skip</Text>
      </View>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />

      <View style={{flex: 0.4}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
        <View style={{paddingRight: 110, paddingLeft: 110, marginTop: 40}}>
          <NextPress txtButton={txtButton} scrollTo={scrollTo}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    flex: 0.5,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
  },
  desc: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
  count: {
    // display: 'flex',
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
  },
  textCount: {
    fontWeight: '400',
    color: 'black',
    fontSize: 14,
  },

});
