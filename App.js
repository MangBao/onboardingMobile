import React from 'react';
import OnBoarding from './components/OnBoarding';
import {StyleSheet} from 'react-native';
import Login from './pages/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator style={styles.container}>
          {/* <Stack.Screen
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
          /> */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
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
