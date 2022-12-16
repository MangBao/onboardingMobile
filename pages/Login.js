import {View, StyleSheet, Image, Text, ScrollView, Dimensions} from 'react-native';
import Button from '../components/Button';
import ForgotPassword from '../components/ForgotPassword';
import InputLogin from '../components/InputLogin';
import Logo from '../components/Logo';
import Socials from '../components/Socials';
import SignUp from '../pages/SignUp';

export default Login = ({navigation}) => {
  const imageOr = require('../assets/images/or.png');
  const textTitle = 'Login';

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <Logo textTitle={textTitle} />
        <View style={{height: 20}}></View>
        <InputLogin textTitle={textTitle} />
        <ForgotPassword />
        <View style={{height: 18}}></View>
        <Button textTitle={textTitle} navigation={navigation} />
        <View style={{height: 26}}></View>
        <Image source={imageOr} style={styles.imageOr} />
        <View style={{height: 26}}></View>
        <Socials />
        <View style={{height: 26}}></View>
        <Text>
          Don't have an account?{' '}
          <Text
            style={styles.signup}
            onPress={() => navigation.navigate(SignUp)}>
            Sign up
          </Text>
        </Text>
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
  imageOr: {},
  signup: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  contentContainer: {
    backgroundColor: '#fbfbfd',
  },
});
