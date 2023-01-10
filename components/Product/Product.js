import {StyleSheet, View, Image, Text} from 'react-native';
import Heart from '../Heart/Heart';

export default Product = ({...prop}) => {
  return (
    <View style={styles.tab} key={prop.keyProduct}>
      <View style>
        <Image source={prop.image} />
      </View>
      <View style={styles.groupText}>
        <Text style={styles.price}>{prop.price} $</Text>
        <Text>{prop.name}</Text>
      </View>
      <View style={styles.heart}>
        <Heart />
      </View>
    </View>
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
