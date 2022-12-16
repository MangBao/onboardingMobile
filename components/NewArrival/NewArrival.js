import {Dimensions, ScrollView, StyleSheet, View, Text} from 'react-native';
import ProductItem from '../Product/Product';
import productItem from '../../productItem';

export default NewArrival = () => {
  return (
    <View>
      <View style={styles.newArrival}>
        <Text style={styles.title}>New Arrival</Text>
        <Text style={styles.text}>See All</Text>
      </View>
      <View style={{height: 20}} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.groupTabs}>
          {productItem.map((item, index) => (
            <ProductItem
              keyProduct={index}
              image={item.image}
              price={item.price}
              name={item.name_product}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  newArrival: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 48,
    marginLeft: 22
  },
  contentContainer: {
    backgroundColor: '#fbfbfd',
  },
  groupTabs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: Dimensions.get('window').width,
    paddingLeft: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  }, 
  text: {
    color: 'gray',
    fontSize: 16,
  }
});
