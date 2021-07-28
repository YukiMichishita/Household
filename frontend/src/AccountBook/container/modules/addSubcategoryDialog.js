import React from 'react';
import { useSelector } from 'react-redux';
import AddSubcategoryDialog from '../../components/modules/addSubcategoryDialog';
import useAddSpendingSubcategoryDialog from '../../hooks/use-addSpendingSubcategoryDialog';
import useAddIncomeSubcategoryDialog from '../../hooks/use-addIncomeSubcategoryDialog';

function AddSpendingSubcategoryDialog(props) {
  const [open, setOpen, value, setValue, editing, setEditing, createSubcategory, updateSubcategory, deleteSubcategory] =
    useAddSpendingSubcategoryDialog();

  return (
    <AddSubcategoryDialog
      classes={props.classes}
      open={open}
      setOpen={setOpen}
      value={value}
      setValue={setValue}
      editing={editing}
      setEditing={setEditing}
      createSubcategory={createSubcategory}
      updateSubcategory={updateSubcategory}
      deleteSubcategory={deleteSubcategory}
    />
  );
}

function AddIncomeSubcategoryDialog(props) {
  const [open, setOpen, value, setValue, editing, setEditing, createSubcategory, updateSubcategory, deleteSubcategory] =
    useAddIncomeSubcategoryDialog();

  return (
    <AddSubcategoryDialog
      classes={props.classes}
      open={open}
      setOpen={setOpen}
      value={value}
      setValue={setValue}
      editing={editing}
      setEditing={setEditing}
      createSubcategory={createSubcategory}
      updateSubcategory={updateSubcategory}
      deleteSubcategory={deleteSubcategory}
    />
  );
}

export default function EnhancedAddSubcategoryDialog(props) {
  const mode = useSelector((state) => state.mode);
  if (mode === 'spending') {
    return <AddSpendingSubcategoryDialog classes={props.classes} />;
  } else {
    return <AddIncomeSubcategoryDialog classes={props.classes} />;
  }
}
