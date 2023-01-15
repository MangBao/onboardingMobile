import {useNavigation} from '@react-navigation/core';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import Heart from '../components/Heart/Heart';
import {productSelector} from '../redux/selectors';

export default Cart = () => {
  const navigation = useNavigation();

  const handlePressBackBtn = () => {
    const routes = navigation.getState()?.routes;
    const prevRoute = routes[routes.length - 2];

    navigation.navigate(prevRoute.name);
  };

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
        <View style={styles.product}>
          <View style={styles.wrapImage}>
            <Image
              source={require('../assets/images/ao1.png')}
              style={{width: 80, height: 80}}
            />
          </View>
          <View style={styles.price}>
            <Text style={{fontSize: 17, marginBottom: 14}}>Henley Shirts</Text>
            <Text style={{fontSize: 17}}>$250</Text>
          </View>
          <View style={styles.inputAdd}>
            <Text
              style={{
                fontSize: 17,
                marginRight: 10,
                backgroundColor: '#feebe5',
                width: 22,
                height: 22,
                borderRadius: 8,
                textAlign: 'center',
              }}>
              +
            </Text>
            <Text style={{fontSize: 17}}>1</Text>
            <Text
              style={{
                fontSize: 17,
                marginLeft: 10,
                backgroundColor: '#feebe5',
                width: 22,
                height: 22,
                borderRadius: 8,
                textAlign: 'center',
              }}>
              -
            </Text>
          </View>
        </View>
      </ScrollView>
      <View>
        <Text></Text>
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
  },
  price: {
    marginLeft: 16,
  },
  inputAdd: {
    flexDirection: 'row',
    marginLeft: 60,
  },
});
