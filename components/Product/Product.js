import { useNavigation } from '@react-navigation/core';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import productSlice from '../../redux/productSlice';
import Heart from '../Heart/Heart';

export default Product = ({product, keyProduct}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlePress = () => {
    dispatch(productSlice.actions.setProductDetail(product));

    navigation.navigate('ProductDetail');
}

  return (
    <TouchableOpacity style={styles.tab} key={keyProduct.keyProduct} activeOpacity={0.9} onPress={handlePress}>
      <View style>
        <Image source={{ uri: product.image}} style={{height: 140, width: 100}} resizeMode={'contain'} />
      </View>
      <View style={styles.groupText}>
        <Text style={styles.price}>{product.price} $</Text>
        <Text>{product.name_product}</Text>
      </View>
      <View style={styles.heart}>
        <Heart favorite={product.favorite} product={product} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    // backgroundColor: 'red',
    width: 160,
    minHeight: 200,
    borderRadius: 10,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efeef3',
    marginBottom: 20,
  },
  groupText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
    color: 'black',
  },
  heart: {
    position: 'absolute',
    top: '4%',
    left: '75%',
  },
});
