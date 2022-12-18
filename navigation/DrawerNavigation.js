import {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';

import TabButton from '../components/TabButton/TabButton';
import TabNavigation from './TabNavigation';

export default DrawerNavigation = () => {
  const imageAvatar = require('../assets/images/avatar.jpeg');

  const [currentTab, setCurrentTab] = useState('Home');

  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.groupProfile}>
          <Image source={imageAvatar} style={styles.avatar} />
          <Text style={styles.name}>Mang Bao</Text>
          <TouchableOpacity>
            <Text>View profile</Text>
          </TouchableOpacity>
        </View>

        <View style={{height: 20}} />

        <View style={styles.listTab}>
          {
            //
          }
          {TabButton(currentTab, setCurrentTab, 'My favorites', 'heart')}
          {TabButton(currentTab, setCurrentTab, 'Wallets', 'heart')}
          {TabButton(currentTab, setCurrentTab, 'My orders', 'heart')}
          {TabButton(currentTab, setCurrentTab, 'Privacy policy', 'heart')}
          {TabButton(currentTab, setCurrentTab, 'Settings', 'heart')}
        </View>
        <View>{TabButton(currentTab, setCurrentTab, 'LogOut', 'heart')}</View>
      </View>

      <View
        style={[
          styles.overlay,
          {
            paddingHorizontal: 15,
            paddingVertical: 20,
            borderRadius: showMenu ? 15 : 0,
            transform: [{scale: scaleValue}, {translateX: offsetValue}],
          },
        ]}>
        <TabNavigation
          offsetValue={offsetValue}
          scaleValue={scaleValue}
          closeButtonOffset={closeButtonOffset}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fbfbfd',
    justifyContent: 'flex-start',
    padding: 20,
    // width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').height,
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
  listTab: {
    flexGrow: 1,
    marginTop: 50,
  },
  overlay: {
    flexGrow: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
