import {View, Image, StyleSheet, Text} from 'react-native';

export default NewArrivalProduct = ({...prop}) => {
  // const defaultPath = '../../assets/images';

  return (
    <View style={styles.tab} key={prop.keyProduct}>
      <View>
        <Image
          source={{uri: prop.image}}
          style={{height: 140, width: 100}}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.groupText}>
        <Text style={styles.price}>{prop.price} $</Text>
        <Text>{prop.name}</Text>
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
});
