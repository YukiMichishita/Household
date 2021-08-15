import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchIncomeSubcategories } from '../stores/subcategory';
import { createIncomeSubcategory, updateIncomeSubcategory, deleteIncomeSubcategory } from '../api/CRUDIncomeCategory';
import { setOpenPop } from '../stores/openPop';
import { reload } from '../stores/reloadCategory';
import { getIncomeBySubcategory } from '../api/CRUDIncome';

const useAddIncomeSubcategoryDialog = () => {
  const income = useSelector((state) => state.expences).item;
  const reloadCategory = useSelector((state) => state.reloadCategory);
  const dispatch = useDispatch();
  const subcategoryNames = useSelector((state) => state.subcategory).items.map((c) => c.name);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [editing, setEditing] = useState(false);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const register = async (registerFunction, name) => {
    if (name.length <= 0) {
      window.alert('名前を入力してください');
      return;
    }
    if (subcategoryNames.includes(name)) {
      window.alert('既に存在するカテゴリ名です');
      return;
    }

    await registerFunction(
      {
        id: income.subcategory,
        user: user.sub,
        name,
        category: income.category,
      },
      getAccessTokenSilently,
    );
    name = '';
    dispatch(setOpenPop('保存しました'));
    dispatch(reload());
  };

  const del = async () => {
    if (Object.keys(await getIncomeBySubcategory(user, income.subcategory, getAccessTokenSilently)).length > 0) {
      window.alert('このサブカテゴリで入力されたデータがあるため削除できません');
      return;
    }

    if (!window.confirm('削除しますか？')) {
      return;
    }
    await deleteIncomeSubcategory(income.subcategory, getAccessTokenSilently);
    dispatch(setOpenPop('削除しました'));
    dispatch(reload());
  };

  useEffect(() => {
    if (isAuthenticated && income.category) {
      dispatch(fetchIncomeSubcategories(user.sub, income.category, getAccessTokenSilently));
    }
  }, [income.category, reloadCategory]);

  return [
    open,
    setOpen,
    value,
    setValue,
    editing,
    setEditing,
    () => register(createIncomeSubcategory, document.getElementById('subcategory_name').value),
    () => register(updateIncomeSubcategory, document.getElementById('dialogSubcategoryInput').value),
    del,
  ];
};
export default useAddIncomeSubcategoryDialog;
