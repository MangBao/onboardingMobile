import {useNavigation} from '@react-navigation/core';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import Button from '../components/Button';
import Heart from '../components/Heart/Heart';
import {productSelector} from '../redux/selectors';

export default ProductDetail = () => {
  const navigation = useNavigation();

  const {productDetail} = useSelector(productSelector);

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
          <Heart />
        </View>
        <View style={styles.groupImage}>
          <Image
            source={{uri: productDetail.image}}
            style={styles.imageProduct}
          />
        </View>
      </View>
      <View style={styles.detail}>
        <View style={styles.title}>
          <Text style={{fontSize: 20, fontWeight: '500', color: 'black'}}>
            {productDetail.name_product}
          </Text>
          <Text style={{fontSize: 20, fontWeight: '500', color: 'black'}}>
            $ {productDetail.price}
          </Text>
        </View>
        <View style={styles.desc}>
          <Text>{productDetail.desc}</Text>
        </View>
        <View style={styles.listColor}>
          <Text style={{fontSize: 18}}>Colors</Text>
          <View style={styles.groupColor}>
            <View
              style={{
                backgroundColor: '#bfe8ea',
                width: 20,
                height: 20,
                borderRadius: 10,
                marginRight: 6,
              }}
            />
            <View
              style={{
                backgroundColor: '#141a4a',
                width: 20,
                height: 20,
                borderRadius: 10,
                marginRight: 6,
              }}
            />
            <View
              style={{
                backgroundColor: '#cde3f6',
                width: 20,
                height: 20,
                borderRadius: 10,
                marginRight: 6,
              }}
            />
            <View
              style={{
                backgroundColor: '#f4e5c4',
                width: 20,
                height: 20,
                borderRadius: 10,
                marginRight: 6,
              }}
            />
          </View>
        </View>
        <View style={styles.addButton}>
          <Button textTitle={'Add to Cart'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efeef3',
    flex: 1,
  },
  fontIcon: {
    fontSize: 18,
    padding: 6,
  },
  groupHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 18,
    paddingHorizontal: 20,
  },
  imageProduct: {
    width: 200,
    height: 320,
    resizeMode: 'contain',
    marginTop: -44,
  },
  groupImage: {
    width: Dimensions.get('window').width,
    display: 'flex',
    alignItems: 'center',
  },
  detail: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 20,
    shadowColor: '#171717',
    position: 'absolute',
    top: Dimensions.get('window').height - 360,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  desc: {
    paddingHorizontal: 24,
  },
  listColor: {
    padding: 24,
  },
  groupColor: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  addButton: {
    marginTop: 10,
  },
});
