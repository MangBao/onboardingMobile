import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default Drawer = () => {
  const imageAvatar = require('../../assets/images/avatar.jpeg');

  return (
    <View style={styles.container}>
      <Image source={imageAvatar} style={styles.avatar} />
      <Text style={styles.name}>Mang Bao</Text>
      <TouchableOpacity>
        <Text>
            View profile
        </Text>
      </TouchableOpacity>
      <View>
        {
            //
        }
        <View style={styles.bindImage}>
            <FontAwesome name="home" style={styles.iconStyle} />
            <Text>
                Home
            </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  bindImage: {

  }
});
