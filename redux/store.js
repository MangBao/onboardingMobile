import {configureStore} from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import favoriteSlice from './favoriteSlice';
import productSlice from './productSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    favorite: favoriteSlice.reducer,
    product: productSlice.reducer,
  },
});

export default store;
