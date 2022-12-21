import {View, StyleSheet, Text} from 'react-native';

export default Category = () => {
  return (
    <View style={styles.groupCategory}>
      <Text style={styles.title}>Category</Text>
      <View style={styles.groupItem}>
        <Text style={[styles.textActive, styles.button]}>New Arrival</Text>
        <Text style={[styles.textNonActive, styles.button]}>Top Tranding</Text>
        <Text style={[styles.textNonActive, styles.button]}>
          Featured Products
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupCategory: {
    padding: 24,
  },
  textActive: {
    backgroundColor: '#f77951',
    color: 'white',
  },
  textNonActive: {
    backgroundColor: '#fbfbfb',
    color: 'black',
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: 'black',
    marginBottom: 12,
  },
  groupItem: {
    flexDirection: 'row',
  },
  button: {
    // padding: 20,
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginRight: 4,
    borderRadius: 10,
  },
});
