import {TextInput, View, Image, StyleSheet, Dimensions} from 'react-native';

export default inputLogin = () => {
  const imageUser = require('../assets/images/user.png');
  const imagePassword = require('../assets/images/password.png');

  return (
    <View style={styles.container}>
      <View style={[styles.groupInput, {marginBottom: 6}]}>
        <Image source={imageUser} />
        <TextInput style={styles.inputText} placeholder="Email" />
      </View>
      <View style={[styles.groupInput, {marginTop: 6}]}>
        <Image source={imagePassword} />
        <TextInput style={styles.inputText} placeholder="Password" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  groupInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#FFFFF7',
    padding: 4,
    borderRadius: 10,
  },
  inputText: {
    width: Dimensions.get('window').width - 130,
  },
});
