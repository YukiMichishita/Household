import React, { useState, useEffect } from 'react';
import { fetchSpendingCategories, fetchIncomeCategories } from '../../stores/category';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../stores/expences';
import CategoryForm from '../../components/atoms/categoryForm';

const EnhancedCategoryForm = (props) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.expences).item.category;
  const reloadCategory = useSelector((state) => state.reloadCategory);
  const categories = useSelector((state) => state.category);
  const mode = useSelector((state) => state.mode);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  //カテゴリの読み込み
  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }
    if (mode === 'spending') {
      dispatch(fetchSpendingCategories(user.sub, getAccessTokenSilently));
    } else {
      dispatch(fetchIncomeCategories(user.sub, getAccessTokenSilently));
    }
  }, [isAuthenticated, reloadCategory, mode]);

  return (
    <CategoryForm
      id={props.id}
      classes={props.classes}
      value={value}
      categories={categories}
      setCategory={(values) => {
        dispatch(setCategory(values));
      }}
    />
  );
};

export default EnhancedCategoryForm;
