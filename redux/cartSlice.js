import {createSlice} from '@reduxjs/toolkit';

export default createSlice({
  name: 'cart',
  initialState: {
    cartProduct: [],
  },
  reducers: {
    setCartProduct: (state, action) => {
      state.cartProduct = action.payload;
    },
  },
});
