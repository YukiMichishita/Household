import { createSlice } from '@reduxjs/toolkit';
import { ExpencesInitialState } from '../common/initialStates';
import { getSpendingDetail } from '../api/CRUDSpending';
import { getIncomeDetail } from '../api/CRUDIncome';

const slice = createSlice({
  name: 'expences',
  initialState: { loading: false, error: null, multiMonth: false, item: ExpencesInitialState },
  reducers: {
    fetchStart: (state, action) => {
      return { ...state, loading: true, error: null };
    },
    fetchSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        item: { ...action.payload[0], subcategory: action.payload[0].subcategory ?? '' },
      };
    },
    fetchFailure: (state, action) => {
      return { ...state, loading: false, error: action.payload };
    },
    setAccountDate: (state, action) => {
      return {
        ...state,
        item: { ...state.item, account_date: action.payload },
      };
    },
    setMultiMonth: (state, action) => {
      return { ...state, multiMonth: action.payload };
    },
    setBeginMonth: (state, action) => {
      return { ...state, item: { ...state.item, beginMonth: action.payload } };
    },
    setEndMonth: (state, action) => {
      return { ...state, item: { ...state.item, endMonth: action.payload } };
    },
    setMultiMonthDate: (state, action) => {
      return { ...state, item: { ...state.item, multiMonthsDate: action.payload } };
    },
    setAmount: (state, action) => {
      return { ...state, item: { ...state.item, amount: action.payload } };
    },
    setCategory: (state, action) => {
      return { ...state, item: { ...state.item, category: action.payload } };
    },
    setSubcategory: (state, action) => {
      return { ...state, item: { ...state.item, subcategory: action.payload } };
    },
    setComment: (state, action) => {
      return { ...state, item: { ...state.item, comment: action.payload } };
    },
    setUser: (state, action) => {
      return { ...state, item: { ...state.item, user: action.payload } };
    },
    clearExpences: (state, action) => {
      return { loading: false, error: null, multiMonth: false, item: ExpencesInitialState };
    },
  },
});
export const {
  fetchStart,
  fetchSuccess,
  fetchFailure,
  setMultiMonth,
  setBeginMonth,
  setEndMonth,
  setMultiMonthDate,
  setAccountDate,
  setAmount,
  setCategory,
  setSubcategory,
  setComment,
  setUser,
  clearExpences,
} = slice.actions;

export const fetchSpendingDetail = (id, getAccessTokenSilently) => async (dispatch) => {
  try {
    dispatch(fetchStart());
    dispatch(fetchSuccess(await getSpendingDetail(id, getAccessTokenSilently)));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};
export const fetchIncomeDetail = (id, getAccessTokenSilently) => async (dispatch) => {
  try {
    dispatch(fetchStart());
    dispatch(fetchSuccess(await getIncomeDetail(id, getAccessTokenSilently)));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

export default slice.reducer;
