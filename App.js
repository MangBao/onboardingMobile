import React from 'react';
import OnBoarding from './components/OnBoarding';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';

export default App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <OnBoarding />
    </View>
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
