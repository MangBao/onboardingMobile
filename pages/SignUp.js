import {View, StyleSheet, Image, Text, ScrollView, Dimensions} from 'react-native';
import Button from '../components/Button';
import ForgotPassword from '../components/ForgotPassword';
import InputLogin from '../components/InputLogin';
import Logo from '../components/Logo';
import Socials from '../components/Socials';
import TermCheckBox from '../components/TermCheckBox';
import Login from '../pages/Login';

export default SignUp = ({navigation}) => {
  const imageOr = require('../assets/images/or.png');
  const textTitle = 'Sign Up';

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <Logo textTitle={textTitle} />
        <View style={{height: 20}}></View>
        <InputLogin textTitle={textTitle} />
        <TermCheckBox />
        <View style={{height: 10}}></View>
        <Button textTitle={textTitle} />
        <View style={{height: 20}}></View>
        <Image source={imageOr} style={styles.imageOr} />
        <View style={{height: 22}}></View>
        <Socials />
        <View style={{height: 22}}></View>
        <Text>
          Already have an account?{' '}
          <Text style={styles.login} onPress={() => navigation.navigate(Login)}>
            Login
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
  },
  login: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  contentContainer: {
    backgroundColor: '#fbfbfd',
  },
});
