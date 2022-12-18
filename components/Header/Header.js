import {StyleSheet, Text, TouchableOpacity, View, Animated} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default Header = ({...prop}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome5 name="bars" solid style={styles.fontIcon} />
      </TouchableOpacity>
      <Text style={styles.fontText}>
        <FontAwesome5 name="map-marker-alt" regular />
        <Text>15/2 New Texas</Text>
      </Text>
      <View style={styles.groupIcon}>
        <FontAwesome5
          name="bell"
          solid
          style={[styles.fontIcon, styles.fontBell]}
        />
        <View style={styles.styleDot}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: Dimensions.get('window').width + 80,
    paddingTop: 28,
    paddingHorizontal: 20,
  },
  fontIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  fontText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  fontBell: {
    color: 'gray',
  },
  styleDot: {
    backgroundColor: '#f77951',
    borderRadius: 10,
    width: 8,
    height: 8,
    position: 'absolute',
    top: 1,
    left: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  groupIcon: {
    position: 'relative',
  },
});
