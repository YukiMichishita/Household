import { accountBookFetch } from '../common/commonFunction';

const spendingURL = 'api/spending/';
const spendingPerCategoryURL = 'api/spendingPerCategory/';

export const getSpendingDetail = async (id, getAccessToken) => {
  return await accountBookFetch(spendingURL + '?id=' + id, null, getAccessToken, 'GET');
};
export const getSpendingPerMonth = async (id, yearMonth, getAccessToken) => {
  return await accountBookFetch(spendingURL + id + '/' + yearMonth, null, getAccessToken, 'GET');
};
export const getSpendingForChart = async (id, category, subcategory, getAccessToken) => {
  return await accountBookFetch(
    spendingPerCategoryURL + id + '/' + category + '/' + ' ' + '/',
    null,
    getAccessToken,
    'GET',
  );
};
export const getSpendingByCategory = async (id, category, getAccessToken) => {
  return await accountBookFetch(spendingURL + '?user=' + id + '&category=' + category, null, getAccessToken, 'GET');
};
export const getSpendingBySubcategory = async (id, subcategory, getAccessToken) => {
  return await accountBookFetch(
    spendingURL + '?user=' + id + '&subcategory=' + subcategory,
    null,
    getAccessToken,
    'GET',
  );
};
export const createSpending = async (body, getAccessToken) => {
  return await accountBookFetch(spendingURL, body, getAccessToken, 'POST');
};
export const updateSpending = async (body, getAccessToken) => {
  return await accountBookFetch(spendingURL + body.id + '/', body, getAccessToken, 'PUT');
};
export const deleteSpending = async (id, getAccessToken) => {
  return await accountBookFetch(spendingURL + id + '/', id, getAccessToken, 'DELETE');
};
