import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'modal',
    initialState: {
        showModalFilter: false,
    },
    reducers: {
        setShowModalFilter: (state, action) => { state.showModalFilter = action.payload },
    }
})