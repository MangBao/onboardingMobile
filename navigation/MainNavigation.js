import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnBoarding from '../components/OnBoarding/OnBoarding';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import TabNavigation from './TabNavigation';
import DrawerNavigation from './DrawerNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

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
          name="DrawerNavigation"
          component={DrawerNavigation}
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
