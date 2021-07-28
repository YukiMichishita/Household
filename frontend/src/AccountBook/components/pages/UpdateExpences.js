import React from 'react';
import AccountDateForm from '../../container/atoms/accountDateForm';
import CategoryForm from '../../container/atoms/categoryForm';
import SubcategoryForm from '../../container/atoms/subcategoryForm';
import AmountForm from '../../container/atoms/amountForm';
import CommentForm from '../../container/atoms/commentForm';
import AddCategoryDialog from '../../container/modules/addCategoryDialog';
import AddSubcategoryDialog from '../../container/modules/addSubcategoryDialog';
import { Button } from '@material-ui/core';
import MessagePopover from '../atoms/messagePopover';

export default function UpdateExpences({ expences, classes, disabled, postExpences, deleteExpences }) {
  if (expences.loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <MessagePopover />
      <form noValidate className={classes.form}>
        <div className={classes.selectMonth}>
          <AccountDateForm classes={classes} />
        </div>
        <div>
          <CategoryForm classes={classes} />
          <AddCategoryDialog classes={classes} />
        </div>
        <div>
          <SubcategoryForm classes={classes} />
          <AddSubcategoryDialog classes={classes} />
        </div>
        <AmountForm classes={classes} />
        <CommentForm classes={classes} />
        <Button variant="outlined" disabled={disabled} onClick={postExpences} className={classes.save}>
          保存
        </Button>
        <Button variant="outlined" onClick={deleteExpences} className={classes.delete}>
          削除
        </Button>
      </form>
    </div>
  );
}
