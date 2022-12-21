import {StyleSheet, Text, TouchableOpacity, View, Animated} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default Header = ({...prop}) => {
  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: prop.closeButtonOffset,
            },
          ],
        },
      ]}>
      <TouchableOpacity
        onPress={() => {
          // Do Actions Here....
          // Scaling the view...
          Animated.timing(prop.scaleValue, {
            toValue: prop.showMenu ? 1 : 0.88,
            duration: 500,
            useNativeDriver: true,
          }).start();

          Animated.timing(prop.offsetValue, {
            // YOur Random Value...
            toValue: prop.showMenu ? 0 : 230,
            duration: 500,
            useNativeDriver: true,
          }).start();

          Animated.timing(prop.closeButtonOffset, {
            // YOur Random Value...
            toValue: !prop.showMenu ? -30 : 0,
            duration: 500,
            useNativeDriver: true,
          }).start();

          prop.setShowMenu(!prop.showMenu);
        }}>
        <FontAwesome5
          name={prop.showMenu ? 'chevron-left' : 'bars'}
          solid
          style={styles.fontIcon}
        />
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
    </Animated.View>
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
