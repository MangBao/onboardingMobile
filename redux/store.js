import {configureStore} from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import favoriteSlice from './favoriteSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});

export default store;
