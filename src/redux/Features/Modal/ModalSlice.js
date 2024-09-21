import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openModal: false,
  modalType: 'login',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
  },
});

export const { setOpenModal, setModalType } = modalSlice.actions;

export const selectModalState = (state) => state.modal;

export default modalSlice.reducer;
