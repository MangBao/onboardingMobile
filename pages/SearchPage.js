import {ScrollView, Dimensions, StyleSheet, View, Text} from 'react-native';
import Header from '../components/Header/Header';
import InputSearch from '../components/InputSearch/InputSearch';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import productItem from '../productItem';

import NewArrival from '../components/NewArrival/NewArrival';
import Title from '../components/Title/Title';
import TypeClother from '../components/TypeClother/TypeClother';
import typeProduct from '../typeProduct';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import Product from '../components/Product';
import { useSelector } from 'react-redux';
import { productSelector } from '../redux/selectors';

export default SearchPage = ({...prop}) => {
  const title = 'Explore';
  const subtitle = 'best Outfits for you';

  const {productList} = useSelector(productSelector);


  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Header
        offsetValue={prop.offsetValue}
        scaleValue={prop.scaleValue}
        closeButtonOffset={prop.closeButtonOffset}
        showMenu={prop.showMenu}
        setShowMenu={prop.setShowMenu}
      />
      <View style={{height: 30}} />
      <InputSearch />
      <View style={{height: 18}} />
      <View style={styles.groupTitle}>
        <View style={styles.groupSearches}>
          <Text style={{fontSize: 18, color: 'black', fontWeight: '500'}}>
            Recent searches
          </Text>
          <FontAwesome5 name={'chevron-right'} solid style={styles.fontIcon} />
        </View>
        <View
          style={{height: 22, borderBottomWidth: 1, borderColor: '#f2f2f4'}}
        />
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            fontWeight: '500',
            paddingTop: 18,
          }}>
          Search results showing for "Shirt"
        </Text>
      </View>
      <View style={{height: 30}} />
      <View style={[styles.groupTabs]}>
        {productList.map((product, index) => (
          <Product
            keyProduct={index}
            product={product}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    // backgroundColor: 'gray',
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  groupTabs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
    // width: Dimensions.get('window').width - 20,
    paddingLeft: 20,
  },
  groupSearches: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  groupTitle: {
    paddingHorizontal: 24,
  },
  fontIcon: {
    fontSize: 16,
    color: 'black',
  },
});
