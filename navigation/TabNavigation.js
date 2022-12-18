import {StyleSheet, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Favorite from '../pages/Favorite';
import Profile from '../pages/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

export default TabNavigation = (...prop) => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#f77951"
      barStyle={{backgroundColor: '#fbfbfd'}}
      screenOptions={() => ({
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="Home"
        children={() => <Home />}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="cart-outline" color={color} size={26} />
          ),
          tabBarOptions: {showLabel: false},
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="heart-alt" color={color} size={20} />
          ),
          tabBarOptions: {showLabel: false},
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="user-o" color={color} style={styles.iconStyle} />
          ),
          tabBarOptions: {showLabel: false},
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 22,
  },
  groupIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
