import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import store from './redux/store';

import MainNavigation from './navigation/MainNavigation';

export default App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MainNavigation />
      </PaperProvider>
    </Provider>
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
