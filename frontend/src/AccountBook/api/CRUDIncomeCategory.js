import { accountBookFetch } from '../common/commonFunction';

const incomeCategoryURL = 'api/incomecategory/';
const incomeSubcategoryURL = 'api/incomesubcategory/';

//カテゴリ
export const getIncomeCategory = async (id, getAccessToken) => {
  return await accountBookFetch(incomeCategoryURL + '?user=' + id, null, getAccessToken, 'GET');
};
export const createIncomeCategory = async (body, getAccessToken) => {
  return await accountBookFetch(incomeCategoryURL, body, getAccessToken, 'POST');
};
export const updateIncomeCategory = async (body, getAccessToken) => {
  return await accountBookFetch(incomeCategoryURL + body.id + '/', body, getAccessToken, 'PUT');
};
export const deleteIncomeCategory = async (id, getAccessToken) => {
  return await accountBookFetch(incomeCategoryURL + id, null, getAccessToken, 'DELETE');
};

//サブカテゴリ
export const getIncomeSubcategory = async (id, category, getAccessToken) => {
  return await accountBookFetch(
    incomeSubcategoryURL + '?user=' + id + '&category=' + category,
    null,
    getAccessToken,
    'GET',
  );
};
export const createIncomeSubcategory = async (body, getAccessToken) => {
  return await accountBookFetch(incomeSubcategoryURL, body, getAccessToken, 'POST');
};
export const updateIncomeSubcategory = async (body, getAccessToken) => {
  return await accountBookFetch(incomeSubcategoryURL + body.id + '/', body, getAccessToken, 'PUT');
};
export const deleteIncomeSubcategory = async (id, getAccessToken) => {
  return await accountBookFetch(incomeSubcategoryURL + id, null, getAccessToken, 'DELETE');
};
