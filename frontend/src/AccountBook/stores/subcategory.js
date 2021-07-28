import { createSlice } from '@reduxjs/toolkit';
import { getSpendingSubcategory } from '../api/CRUDSpendingCategory';
import { getIncomeSubcategory } from '../api/CRUDIncomeCategory';

const slice = createSlice({
  name: 'subcategory',
  initialState: { loading: false, error: null, items: [] },
  reducers: {
    fetchStart: (state, action) => {
      return { ...state, loading: true, error: null };
    },
    fetchSuccess: (state, action) => {
      return { loading: false, error: null, items: action.payload };
    },
    fetchFailure: (state, action) => {
      return { ...state, loading: false, error: action.payload };
    },
    setSubcategories: (state, action) => {
      return action.payload;
    },
    clearSubcategories: (state, action) => {
      [];
    },
  },
});

export default slice.reducer;
export const { fetchStart, fetchSuccess, fetchFailure, clearSubcategories } = slice.actions;

export const fetchSpendingSubcategories = (user, category, getAccessTokenSilently) => async (dispatch) => {
  try {
    dispatch(fetchStart());
    dispatch(fetchSuccess(await getSpendingSubcategory(user, category, getAccessTokenSilently)));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};
export const fetchIncomeSubcategories = (user, category, getAccessTokenSilently) => async (dispatch) => {
  try {
    dispatch(fetchStart());
    dispatch(fetchSuccess(await getIncomeSubcategory(user, category, getAccessTokenSilently)));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};
