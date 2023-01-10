import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnBoarding from '../components/OnBoarding/OnBoarding';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import TabNavigation from './TabNavigation';
import DrawerNavigation from './DrawerNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import SearchPage from '../pages/SearchPage';

const Stack = createNativeStackNavigator();

export default MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.container}>
        <Stack.Screen
          name="Onboarding"
          component={OnBoarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          initialParams={{statePage: 'Home'}}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchPage"
          component={SearchPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
