import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'openPop',
  initialState: '',
  reducers: {
    openPop: (state, aciton) => {
      return aciton.payload;
    },
    closePop: (state, aciton) => {
      return '';
    },
  },
});

export default slice.reducer;
export const { openPop, closePop } = slice.actions;

export const setOpenPop = (message) => (dispatch) => {
  dispatch(openPop(message));
  setTimeout(() => {
    dispatch(closePop());
  }, 5000);
};
