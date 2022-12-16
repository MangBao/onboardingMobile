import React from 'react';
import {StyleSheet} from 'react-native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import MainNavigation from './navigation/MainNavigation';

export default App = () => {
  return (
    <PaperProvider>
      <MainNavigation />
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
