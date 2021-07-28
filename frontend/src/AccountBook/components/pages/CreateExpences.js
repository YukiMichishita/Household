import React from 'react';
import AccountDateForm from '../../container/atoms/accountDateForm';
import AmountForm from '../../container/atoms/amountForm';
import CategoryForm from '../../container/atoms/categoryForm';
import SubcategoryForm from '../../container/atoms/subcategoryForm';
import CommentForm from '../../container/atoms/commentForm';
import AddCategoryDialog from '../../container/modules/addCategoryDialog';
import AddSubcategoryDialog from '../../container/modules/addSubcategoryDialog';
import MessagePopover from '../atoms/messagePopover';
import { Button } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import SelectBeginEndMonth from '../modules/selectBeginEndMonths';

export default function CreateExpences({ classes, loading, disabled, multiMonth, switchMonth, postExpences }) {
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <MessagePopover />
      <form noValidate className={classes.form}>
        <div>
          <div className={classes.selectMonth}>
            {multiMonth ? <SelectBeginEndMonth classes={classes} /> : <AccountDateForm classes={classes} />}
          </div>
          <CachedIcon className={classes.switchIcon} onClick={switchMonth} />
        </div>
        <CategoryForm classes={classes} />
        <AddCategoryDialog classes={classes} />
        <SubcategoryForm classes={classes} />
        <AddSubcategoryDialog classes={classes} />
        <AmountForm classes={classes} />
        <CommentForm classes={classes} />
        <Button variant="outlined" disabled={disabled} onClick={postExpences} className={classes.save}>
          保存
        </Button>
      </form>
    </div>
  );
}
