import { accountBookFetch } from '../common/commonFunction';

const spendingCategoryURL = 'api/spendingcategory/';
const spendingSubcategoryURL = 'api/spendingsubcategory/';

//カテゴリ
export const getSpendingCategory = async (id, getAccessToken) => {
  return await accountBookFetch(spendingCategoryURL + '?user=' + id, null, getAccessToken, 'GET');
};
export const createSpendingCategory = async (body, getAccessToken) => {
  return await accountBookFetch(spendingCategoryURL, body, getAccessToken, 'POST');
};
export const updateSpendingCategory = async (body, getAccessToken) => {
  return await accountBookFetch(spendingCategoryURL + body.id + '/', body, getAccessToken, 'PUT');
};
export const deleteSpendingCategory = async (id, getAccessToken) => {
  return await accountBookFetch(spendingCategoryURL + id, null, getAccessToken, 'DELETE');
};

//サブカテゴリ
export const getSpendingSubcategory = async (id, category, getAccessToken) => {
  return await accountBookFetch(
    spendingSubcategoryURL + '?user=' + id + '&category=' + category,
    null,
    getAccessToken,
    'GET',
  );
};
export const createSpendingSubcategory = async (body, getAccessToken) => {
  return await accountBookFetch(spendingSubcategoryURL, body, getAccessToken, 'POST');
};
export const updateSpendingSubcategory = async (body, getAccessToken) => {
  return await accountBookFetch(spendingSubcategoryURL + body.id + '/', body, getAccessToken, 'PUT');
};
export const deleteSpendingSubcategory = async (id, getAccessToken) => {
  return await accountBookFetch(spendingSubcategoryURL + id, null, getAccessToken, 'DELETE');
};
