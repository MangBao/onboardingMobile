import {createSlice} from '@reduxjs/toolkit';

export default createSlice({
  name: 'products',
  initialState: {
    productList: [],
  },
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
  },
});
