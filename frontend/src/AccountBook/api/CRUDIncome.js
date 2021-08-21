import { accountBookFetch } from '../common/commonFunction';

const incomeURL = 'api/income/';
const incomePerCategoryURL = 'api/incomePerCategory/';

export const getIncomeDetail = async (id, getAccessToken) => {
  return await accountBookFetch(incomeURL + '?id=' + id, null, getAccessToken, 'GET');
};
export const getIncomePerMonth = async (id, yearMonth, getAccessToken) => {
  return await accountBookFetch(incomeURL + id + '/' + yearMonth, null, getAccessToken, 'GET');
};
export const getIncomeForChart = async (id, category, subcategory, getAccessToken) => {
  return await accountBookFetch(
    incomePerCategoryURL + id + '/' + category + '/' + ' ' + '/',
    null,
    getAccessToken,
    'GET',
  );
};
export const getIncomeByCategory = async (id, category, getAccessToken) => {
  return await accountBookFetch(incomeURL + '?user=' + id + '&category=' + category, null, getAccessToken, 'GET');
};
export const getIncomeBySubcategory = async (id, subcategory, getAccessToken) => {
  return await accountBookFetch(incomeURL + '?user=' + id + '&subcategory=' + subcategory, null, getAccessToken, 'GET');
};
export const createIncome = async (body, getAccessToken) => {
  return await accountBookFetch(incomeURL, body, getAccessToken, 'POST');
};
export const updateIncome = async (body, getAccessToken) => {
  return await accountBookFetch(incomeURL + body.id + '/', body, getAccessToken, 'PUT');
};
export const deleteIncome = async (id, getAccessToken) => {
  return await accountBookFetch(incomeURL + id + '/', id, getAccessToken, 'DELETE');
};
