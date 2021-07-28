import React from 'react';
import { useSelector } from 'react-redux';
import AddCategoryDialog from '../../components/modules/addCategoryDialog';
import useAddSpendingCategoryDialog from '../../hooks/use-addSpendingCategoryDialog';
import useAddIncomeCategoryDialog from '../../hooks/use-addIncomeCategoryDialog';

function AddSpendingCategoryDialog(props) {
  const [open, setOpen, value, setValue, editing, setEditing, createCategory, updateCategory, deleteCategory] =
    useAddSpendingCategoryDialog(props);

  return (
    <AddCategoryDialog
      classes={props.classes}
      open={open}
      setOpen={setOpen}
      value={value}
      setValue={setValue}
      editing={editing}
      setEditing={setEditing}
      createCategory={createCategory}
      updateCategory={updateCategory}
      deleteCategory={deleteCategory}
    />
  );
}
function AddIncomeCategoryDialog(props) {
  const [open, setOpen, value, setValue, editing, setEditing, createCategory, updateCategory, deleteCategory] =
    useAddIncomeCategoryDialog(props);

  return (
    <AddCategoryDialog
      classes={props.classes}
      open={open}
      setOpen={setOpen}
      value={value}
      setValue={setValue}
      editing={editing}
      setEditing={setEditing}
      createCategory={createCategory}
      updateCategory={updateCategory}
      deleteCategory={deleteCategory}
    />
  );
}

export default function EnhancedAddCategoryDialog(props) {
  const mode = useSelector((state) => state.mode);
  if (mode === 'spending') {
    return <AddSpendingCategoryDialog classes={props.classes} />;
  } else {
    return <AddIncomeCategoryDialog classes={props.classes} />;
  }
}
