import {View, StyleSheet, Image, Text, useWindowDimensions} from 'react-native';
import Button from '../components/Button';
import ForgotPassword from '../components/ForgotPassword';
import InputLogin from '../components/InputLogin';
import Logo from '../components/Logo';
import Socials from '../components/Socials';

export default Login = () => {
  const imageOr = require('../assets/images/or.png');

  return (
    <View style={styles.container}>
      <Logo />
      <View style={{height: 20}}></View>
      <InputLogin />
      <ForgotPassword />
      <View style={{height: 18}}></View>
      <Button />
      <View style={{height: 26}}></View>
      <Image source={imageOr} style={styles.imageOr} />
      <View style={{height: 26}}></View>
      <Socials />
      <View style={{height: 26}}></View>
      <Text>
        Don't have an account? <Text style={styles.signup}>Sign up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageOr: {},
  signup: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
});
