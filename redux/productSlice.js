import {createSlice} from '@reduxjs/toolkit';

export default createSlice({
  name: 'products',
  initialState: {
    productList: [],
    productDetail: {},
  },
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});
