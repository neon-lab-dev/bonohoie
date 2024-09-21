import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openDrawer: false,
  drawerType: '',
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setOpenDrawer: (state, action) => {
      state.openDrawer = action.payload;
    },
    setDrawerType: (state, action) => {
      state.drawerType = action.payload;
    },
  },
});

export const { setOpenDrawer, setDrawerType } = drawerSlice.actions;

// Selector to get the drawer state from the store
export const selectDrawerState = (state) => state.drawer;

export default drawerSlice.reducer;