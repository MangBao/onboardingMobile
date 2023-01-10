import {createSlice} from '@reduxjs/toolkit';

export default createSlice({
  name: 'favorite',
  initialState: {
    favoriteList: [],
  },
  reducers: {
    setFavoriteList: (state, action) => {
      state.favoriteList = action.payload;
    },
  },
});
