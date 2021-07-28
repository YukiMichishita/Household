import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'categoryMultiValues',
  initialState: [],
  reducers: {
    clearCategoryValues: (state, action) => {
      return [];
    },
    setCategoryValue: (state, action) => {
      return action.payload;
    },
  },
});

export default slice.reducer;
export const { clearCategoryValues, setCategoryValue } = slice.actions;
