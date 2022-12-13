import {Dimensions, Image, StyleSheet, TextInput, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default InputSearch = () => {
  const imageIcon = require('../../assets/images/buttonInSearch.png');

  return (
    <View style={[styles.groupInput, {marginBottom: 6}]}>
      <FontAwesome5 name="search" light style={styles.textIcon} />
      <TextInput style={styles.inputText} placeholder="Search item" />
      <Image source={imageIcon} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width - 36,
    // backgroundColor: 'red',
    backgroundColor: '#FFFFF7',
    padding: 4,
    borderRadius: 10,
    marginLeft: 20,
    // paddingLeft: 10,
  },
  inputText: {
    width: Dimensions.get('window').width - 120,
  },
  image: {
    width: 60,
    height: 50,
  },
  textIcon: {
    // paddingLeft: 0
  }
});
