import {Image, StyleSheet, Text, View} from 'react-native';

export default TypeClother = ({...prop}) => {
  return (
    <View style={styles.tab} key={prop.key}>
      <Image source={prop.image} />
      <Text>{prop.type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    // backgroundColor: 'red',
    width: 80,
    height: 80,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#eeeef0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
