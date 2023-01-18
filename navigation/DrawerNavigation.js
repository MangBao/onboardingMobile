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
import SearchPage from '../pages/SearchPage';
import TabNavigation from './TabNavigation';

export default DrawerNavigation = ({route, navigation}) => {
  const {statePage} = route.params;
  const {otherParam} = route.params;
  const imageAvatar = require('../assets/images/avatar.jpeg');
  const imageLogo = require('../assets/images/logomobile.png');

  const [currentTab, setCurrentTab] = useState('Home');

  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <View
        style={[
          styles.container,
          {
            height: showMenu
              ? Dimensions.get('window').height - 25
              : Dimensions.get('window').height,
          },
        ]}>
        <View style={styles.groupProfile}>
          <Image source={imageAvatar} style={styles.avatar} />
          <View style={styles.groupName}>
            <Text style={styles.name}>Mang Bao</Text>
            <TouchableOpacity>
              <Text>View profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{height: 20}} />

        <View style={styles.listTab}>
          {TabButton(currentTab, setCurrentTab, 'My favorites', 'heart')}
          {TabButton(currentTab, setCurrentTab, 'Wallets', 'wallet')}
          {TabButton(currentTab, setCurrentTab, 'My orders', 'shopping-basket')}
          {TabButton(currentTab, setCurrentTab, 'About us', 'clipboard-list')}
          {TabButton(currentTab, setCurrentTab, 'Privacy policy', 'lock')}
          {TabButton(currentTab, setCurrentTab, 'Settings', 'gear')}
        </View>
        <View>
          {TabButton(currentTab, setCurrentTab, 'LogOut', 'sign-out', '')}
        </View>
        <View>
          <Image source={imageLogo} />
        </View>
      </View>

      <Animated.View
        style={[
          styles.overlay,
          styles.elevation,
          {
            paddingBottom: 20,
            paddingVertical: showMenu ? 20 : 0,
            borderRadius: showMenu ? 20 : 0,
            transform: [{scale: scaleValue}, {translateX: offsetValue}],
            backgroundColor: 'white',
          },
        ]}>
        {statePage == 'SearchPage' ? (
          <SearchPage
            offsetValue={offsetValue}
            scaleValue={scaleValue}
            closeButtonOffset={closeButtonOffset}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        ) : (
          <TabNavigation
            offsetValue={offsetValue}
            scaleValue={scaleValue}
            closeButtonOffset={closeButtonOffset}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fbfbfd',
    justifyContent: 'flex-start',
    padding: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    padding: 20,
    marginRight: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  listTab: {
    flexGrow: 1,
    marginTop: 20,
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
  elevation: {
    elevation: 20,
    shadowColor: '#171717',
  },
  groupProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
