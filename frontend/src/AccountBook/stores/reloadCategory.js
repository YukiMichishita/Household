import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'reloadCategory',
  initialState: false,
  reducers: {
    reload: (state, aciton) => {
      return !state;
    },
  },
});

export default slice.reducer;
export const { reload } = slice.actions;
