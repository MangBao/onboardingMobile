import {StyleSheet, Image, Text, View} from 'react-native';

export default Logo = ({...prop}) => {
  const imageLogo = require('../assets/images/logomobile.png');

  return (
    <View style={styles.container}>
      <Image source={imageLogo} />
      <View style={{height: 22}}></View>
      <Text style={styles.text}>{prop.textTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
});
