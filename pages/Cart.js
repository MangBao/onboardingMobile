import {useNavigation} from '@react-navigation/core';
import {useEffect} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../components/Button';
import ItemCart from '../components/ItemCart';
import {cartSelector} from '../redux/selectors';

export default Cart = () => {
  const navigation = useNavigation();
  const {cartProduct} = useSelector(cartSelector);

  // useEffect(() => {

  // })

  const handlePressBackBtn = () => {
    const routes = navigation.getState()?.routes;
    const prevRoute = routes[routes.length - 2];

    navigation.navigate(prevRoute.name);
  };

  const handleTotal = () => {
    let total = 0;

    for (let i = 0; i < cartProduct.length; i++) {
      total += cartProduct[i].quality * cartProduct[i].price;
    }

    return total;
  };

  console.log(handleTotal());

  return (
    <View style={styles.container}>
      <View style>
        <View style={styles.groupHeader}>
          <FontAwesome5
            name={'chevron-left'}
            solid
            style={styles.fontIcon}
            onPress={handlePressBackBtn}
          />
          <Text style={styles.textTitle}>My Cart</Text>
        </View>
      </View>
      <ScrollView style={styles.listProduct}>
        {cartProduct.length === 0 ? (
          <Text style={{fontSize: 16, fontWeight: '500'}}>Cart empty !</Text>
        ) : (
          cartProduct.map((item, index) => (
            <ItemCart product={item} indexKey={index} />
          ))
        )}
      </ScrollView>
      <View style={styles.total}>
        <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
          Subtotal:{' '}
        </Text>
        <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
          ${cartProduct.length === 0 ? 0 : handleTotal()}
        </Text>
      </View>
      <View style={styles.addButton}>
        <Button textTitle={'Check out'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efeef3',
    flex: 1,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    marginLeft: 130,
  },
  fontIcon: {
    fontSize: 18,
    padding: 6,
  },
  groupHeader: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 18,
    paddingHorizontal: 20,
  },
  listProduct: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 14,
  },
  groupImage: {
    width: Dimensions.get('window').width,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  addButton: {
    marginTop: 10,
  },
  total: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
