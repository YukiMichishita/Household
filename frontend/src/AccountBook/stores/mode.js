import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'mode',
  initialState: 'spending',
  reducers: {
    switchSpending: (state, action) => {
      return 'spending';
    },
    switchIncome: (state, action) => {
      return 'income';
    },
  },
});

export default slice.reducer;
export const { switchSpending, switchIncome } = slice.actions;
