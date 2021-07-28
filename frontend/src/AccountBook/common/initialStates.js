import { getFormatedDate, getFormatedMonth } from '../common/commonFunction';

const firstMonth = new Date();
firstMonth.setMonth(0);
const lastMonth = new Date();
lastMonth.setMonth(11);

export const ExpencesInitialState = {
  id: '',
  account_date: getFormatedDate(new Date()),
  beginMonth: getFormatedMonth(firstMonth),
  endMonth: getFormatedMonth(lastMonth),
  multiMonthsDate: 1,
  amount: '',
  comment: '',
  category: '',
  subcategory: '',
  user: '',
};

export const perMonthInitialState = [
  {
    id: '',
    account_date: '',
    amount: '',
    comment: '',
    category: '',
    categoryName: '',
    subcategory: '',
    subcategoryName: '',
    detail: [],
  },
];

export const byCategoryInitialState = [
  {
    account_month: '',
    amount: '',
  },
];

export const initialStateAuth0 = {
  getAccessTokenSilently: () => {},
  user: {},
  isAuthenticated: false,
};
