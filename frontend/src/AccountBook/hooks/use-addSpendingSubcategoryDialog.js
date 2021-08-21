import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchSpendingSubcategories } from '../stores/subcategory';
import {
  createSpendingSubcategory,
  updateSpendingSubcategory,
  deleteSpendingSubcategory,
} from '../api/CRUDSpendingCategory';
import { setOpenPop } from '../stores/openPop';
import { reload } from '../stores/reloadCategory';
import { getSpendingBySubcategory } from '../api/CRUDSpending';

const useAddSpendingSubcategoryDialog = () => {
  const spending = useSelector((state) => state.expences).item;
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
        id: spending.subcategory,
        user: user.sub,
        name,
        category: spending.category,
      },
      getAccessTokenSilently,
    );
    name = '';
    dispatch(setOpenPop('保存しました'));
    dispatch(reload());
  };

  const del = async () => {
    if (
      Object.keys(await getSpendingBySubcategory(user.sub, spending.subcategory, getAccessTokenSilently)).length > 0
    ) {
      window.alert('このサブカテゴリで入力されたデータがあるため削除できません');
      return;
    }

    if (!window.confirm('削除しますか？')) {
      return;
    }
    await deleteSpendingSubcategory(spending.subcategory, getAccessTokenSilently);
    dispatch(setOpenPop('削除しました'));
    dispatch(reload());
  };

  useEffect(() => {
    if (isAuthenticated && spending.category) {
      dispatch(fetchSpendingSubcategories(user.sub, spending.category, getAccessTokenSilently));
    }
  }, [spending.category, reloadCategory]);

  return [
    open,
    setOpen,
    value,
    setValue,
    editing,
    setEditing,
    () => register(createSpendingSubcategory, document.getElementById('subcategory_name').value),
    () => register(updateSpendingSubcategory, document.getElementById('dialogSubcategoryInput').value),
    del,
  ];
};
export default useAddSpendingSubcategoryDialog;
