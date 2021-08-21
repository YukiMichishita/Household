import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenPop } from '../stores/openPop';
import { createSpendingCategory, updateSpendingCategory, deleteSpendingCategory } from '../api/CRUDSpendingCategory';
import { useAuth0 } from '@auth0/auth0-react';
import { reload } from '../stores/reloadCategory';
import { getSpendingByCategory } from '../api/CRUDSpending';

const useAddSpendingCategoryDialog = (props) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const spending = useSelector((state) => state.expences).item;
  const categoryNames = useSelector((state) => state.category).items.map((c) => c.name);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [editing, setEditing] = useState(false);

  const register = async (registerFunction, name) => {
    if (name.length <= 0) {
      window.alert('名前を入力してください');
      return;
    }
    if (categoryNames.includes(name)) {
      window.alert('既に存在するカテゴリ名です');
      return;
    }
    await registerFunction(
      {
        id: spending.category,
        user: user.sub,
        name,
      },
      getAccessTokenSilently,
    );
    name = '';
    dispatch(setOpenPop('保存しました'));
    dispatch(reload());
  };

  const del = async () => {
    if (Object.keys(await getSpendingByCategory(user.sub, spending.category, getAccessTokenSilently)).length > 0) {
      window.alert('このカテゴリで入力されたデータがあるため削除できません');
      return;
    }

    if (!window.confirm('削除しますか？')) {
      return;
    }
    await deleteSpendingCategory(spending.category, getAccessTokenSilently);
    dispatch(setOpenPop('削除しました'));
    dispatch(reload());
  };

  return [
    open,
    setOpen,
    value,
    setValue,
    editing,
    setEditing,
    () => register(createSpendingCategory, document.getElementById('category_name').value),
    () => register(updateSpendingCategory, document.getElementById('dialogCategoryInput').value),
    del,
  ];
};
export default useAddSpendingCategoryDialog;
