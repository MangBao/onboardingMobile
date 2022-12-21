import {StyleSheet, View, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textClear}>Clear</Text>
      <Text style={styles.textFilter}>Filters</Text>
      <MaterialIcons name="close" style={styles.iconStyle} />
      {/* <View style={{borderWidth: 1}} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  iconStyle: {
    backgroundColor: '#bbbbbb',
    padding: 6,
    borderRadius: 20,
    fontSize: 14,
  },
  textFilter: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  textClear: {
    fontSize: 16,
  },
});
