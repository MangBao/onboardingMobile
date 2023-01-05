import {
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
  Text,
} from 'react-native';
// import Home from '../pages/Home';
import DrawerNavigation from '../navigation/DrawerNavigation';
import OnBoarding from './OnBoarding/OnBoarding';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

export default Button = ({...prop}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => prop.navigation.navigate(OnBoarding)}>
        <Text style={styles.text}>{prop.textTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    paddingLeft: 90,
    paddingRight: 90,
  },
  button: {
    alignItems: 'center',
    borderRadius: 26,
    backgroundColor: '#f77951',
    padding: 16,
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    color: '#fff',
  },
});
