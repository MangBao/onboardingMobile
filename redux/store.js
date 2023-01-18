import {configureStore} from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import favoriteSlice from './favoriteSlice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    favorite: favoriteSlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
