import { createSlice } from '@reduxjs/toolkit';
import { getSpendingCategory } from '../api/CRUDSpendingCategory';
import { getIncomeCategory } from '../api/CRUDIncomeCategory';

const slice = createSlice({
  name: 'category',
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
    clearCategories: (state, action) => {
      return { loading: false, error: null, items: [] };
    },
  },
});

export default slice.reducer;
export const { fetchStart, fetchSuccess, fetchFailure, clearCategories } = slice.actions;

export const fetchSpendingCategories = (user, getAccessTokenSilently) => async (dispatch) => {
  try {
    dispatch(fetchStart());
    dispatch(fetchSuccess(await getSpendingCategory(user, getAccessTokenSilently)));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};
export const fetchIncomeCategories = (user, getAccessTokenSilently) => async (dispatch) => {
  try {
    dispatch(fetchStart());
    dispatch(fetchSuccess(await getIncomeCategory(user, getAccessTokenSilently)));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};
