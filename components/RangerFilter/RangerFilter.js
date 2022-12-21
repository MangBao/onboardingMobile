import {View, StyleSheet, Text, Dimensions} from 'react-native';
import RangeSlider from '.';
import Button from '../Button';
import Category from './Category';
import Header from './Header';

export default RangerFilter = () => {
  return (
    <View>
      <Header />
      <View style={styles.space} />
      <Category />
      <View style={[styles.groupRange, styles.groupPricing]}>
        <Text style={styles.title}>Pricing</Text>
        <RangeSlider from={50} to={200} unit={'$'} />
      </View>
      <View style={[styles.groupRange, styles.groupDistance]}>
        <Text style={styles.title}>Distance</Text>
        <RangeSlider from={500} to={2000} unit={'km'} />
      </View>
      <View style={{height: 22}} />
      <Button textTitle={'Apply Filter'} />
    </View>
  );
};

const styles = StyleSheet.create({
  space: {
    borderBottomWidth: 1,
    width: Dimensions.get('window').width,
    borderBottomColor: '#d7d8db',
  },
  groupRange: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  groupPricing: {},
  groupDistance: {},
});
