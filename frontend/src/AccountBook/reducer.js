import { Reducer, combineReducers } from 'redux';
import modeReducer from './stores/mode';
import expencesReducer from './stores/expences';
import categoryReducer from './stores/category';
import subcategoryReducer from './stores/subcategory';
import openPop from './stores/openPop';
import reloadCategory from './stores/reloadCategory';
import categoryMultiValues from './stores/categoryMultiValues';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  mode: modeReducer,
  expences: expencesReducer,
  category: categoryReducer,
  subcategory: subcategoryReducer,
  openPop: openPop,
  reloadCategory: reloadCategory,
  categoryMultiValues: categoryMultiValues,
});

const store = configureStore({ reducer: rootReducer });
export default store;
