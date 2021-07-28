import React, { useState, useEffect } from 'react';
import { fetchSpendingSubcategories, fetchIncomeSubcategories } from '../../stores/subcategory';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { setSubcategory } from '../../stores/expences';
import SubcateoryForm from '../../components/atoms/subcategoryForm';

const EnhancedSubcategoryForm = (props) => {
  const dispatch = useDispatch();
  const expences = useSelector((state) => state.expences).item;
  const reloadCategory = useSelector((state) => state.reloadCategory);
  const subcategories = useSelector((state) => state.subcategory);
  const mode = useSelector((state) => state.mode);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  //サブカテゴリの読み込み
  useEffect(() => {
    if (!isAuthenticated || !expences.category) {
      return;
    }
    if (mode === 'spending') {
      dispatch(fetchSpendingSubcategories(user.sub, expences.category, getAccessTokenSilently));
    } else {
      dispatch(fetchIncomeSubcategories(user.sub, expences.category, getAccessTokenSilently));
    }
  }, [isAuthenticated, reloadCategory, expences.category, mode]);

  return (
    <SubcateoryForm
      id={props.id}
      classes={props.classes}
      value={expences.subcategory}
      subcategories={subcategories}
      setSubcategory={(value) => {
        dispatch(setSubcategory(value));
      }}
    />
  );
};

export default EnhancedSubcategoryForm;
