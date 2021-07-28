import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'categoryDialog',
  initialState: { category: '', subcategory: '' },
  reducers: {
    clearCategories: (state, action) => {
      return { loading: false, error: null, items: [] };
    },
  },
});
