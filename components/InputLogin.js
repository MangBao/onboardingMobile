import {TextInput, View, Image, StyleSheet, Dimensions} from 'react-native';

export default inputLogin = ({...prop}) => {
  const imageEmail = require('../assets/images/email.png');
  const imageUser = require('../assets/images/user.png');
  const imagePassword = require('../assets/images/password.png');

  return (
    <View style={styles.container}>
      {prop.textTitle === 'Sign Up' ? (
        <View style={[styles.groupInput, {marginBottom: 6}]}>
          <Image source={imageUser} style={styles.image} />
          <TextInput style={styles.inputText} placeholder="Name" />
        </View>
      ) : (
        ''
      )}
      <View style={[styles.groupInput, {marginBottom: 6}]}>
        <Image source={imageEmail} style={styles.image} />
        <TextInput style={styles.inputText} placeholder="Email" />
      </View>
      <View style={[styles.groupInput]}>
        <Image source={imagePassword} style={styles.image} />
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
    // backgroundColor: 'red',
    backgroundColor: '#FFFFF7',
    padding: 4,
    borderRadius: 10,
  },
  inputText: {
    width: Dimensions.get('window').width - 130,
  },
  image: {
    width: 60,
    height: 50,
  },
});
