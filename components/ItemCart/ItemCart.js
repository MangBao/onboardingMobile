import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import cartSlice from '../../redux/cartSlice';
import {cartSelector} from '../../redux/selectors';

export default ItemCart = ({...prop}) => {
  const dispatch = useDispatch();

  const {cartProduct} = useSelector(cartSelector);

  const increaseQuality = () => {
    const arr = [];
    for (let i = 0; i < cartProduct.length; i++) {
      if (cartProduct[i].id === prop.product.id) {
        arr.push({
          ...cartProduct[i],
          quality: cartProduct[i].quality + 1,
        });
      } else {
        arr.push(cartProduct[i]);
      }
    }
    dispatch(cartSlice.actions.setCartProduct(arr));
  };

  const decreaseQuality = () => {
    const arr = [];
    for (let i = 0; i < cartProduct.length; i++) {
      if (cartProduct[i].id === prop.product.id) {
        arr.push({
          ...cartProduct[i],
          quality: cartProduct[i].quality - 1,
        });
      } else {
        arr.push(cartProduct[i]);
      }
    }
    dispatch(cartSlice.actions.setCartProduct(arr));
  };

  return (
    <View style={styles.product}>
      <View style={styles.wrapInfo}>
        <View style={styles.wrapImage}>
          <Image
            source={{uri: prop.product.image}}
            style={{width: 80, height: 80}}
          />
        </View>
        <View style={styles.price}>
          <Text style={{fontSize: 15, marginBottom: 14}}>
            {prop.product.name_product}
          </Text>
          <Text style={{fontSize: 16}}>${prop.product.price}</Text>
        </View>
      </View>
      <View style={styles.inputAdd}>
        <TouchableOpacity style={styles.increase} onPress={increaseQuality}>
          <Text style={{textAlign: 'center'}}>+</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 17}}>{prop.product.quality}</Text>
        <TouchableOpacity style={styles.decrease} onPress={decreaseQuality}>
          <Text style={{textAlign: 'center'}}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapImage: {
    width: 90,
    height: 90,
    backgroundColor: '#bfe8ea',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 10,
  },
  product: {
    width: Dimensions.get('window').width - 36,
    backgroundColor: '#ffffff',
    paddingBottom: 8,
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  price: {
    marginLeft: 16,
  },
  inputAdd: {
    flex: 0.3,
    flexDirection: 'row',
    marginLeft: 60,
  },
  increase: {
    fontSize: 17,
    marginRight: 10,
    backgroundColor: '#feebe5',
    width: 22,
    height: 22,
    borderRadius: 8,
  },
  decrease: {
    fontSize: 17,
    marginLeft: 10,
    backgroundColor: '#feebe5',
    width: 22,
    height: 22,
    borderRadius: 8,
  },
  wrapInfo: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
