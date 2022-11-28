import {Image, StyleSheet, View} from 'react-native';

export default Socials = () => {
  const imageFb = require('../assets/images/fb.png');
  const imageGg = require('../assets/images/google.png');

  return (
    <View style={styles.container}>
      <View style={[styles.iconFb, styles.iconGroups]}>
        <Image source={imageFb} />
      </View>
      <View style={[styles.iconGg, styles.iconGroups]}>
        <Image source={imageGg} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconGroups: {
    padding: 18,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 0.95,
  },
  iconFb: {
    marginRight: 10,
  },
  iconGg: {
    marginLeft: 10,
  },
});
