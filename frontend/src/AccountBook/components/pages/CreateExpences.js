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
    <React.Fragment>
      <MessagePopover />
      <form noValidate className={classes.form}>
        {/* 会計月選択 */}
        <p className={classes.selectMonthParagraph}>
          <div className={classes.selectMonth}>
            {multiMonth ? <SelectBeginEndMonth classes={classes} /> : <AccountDateForm classes={classes} />}
          </div>
          <CachedIcon className={classes.switchIcon} onClick={switchMonth} />
        </p>
        {/* カテゴリ選択 */}
        <p className={classes.categoryParagraph}>
          <CategoryForm classes={classes} />
          <AddCategoryDialog classes={classes} />
        </p>
        {/* サブカテゴリ選択 */}
        <p className={classes.subcategoryParagraph}>
          <SubcategoryForm classes={classes} />
          <AddSubcategoryDialog classes={classes} />
        </p>
        {/* 金額 */}
        <p>
          <AmountForm classes={classes} />
        </p>
        {/* コメント */}
        <p>
          <CommentForm classes={classes} />
        </p>
        {/* 保存ボタン */}
        <p>
          <Button variant="outlined" disabled={disabled} onClick={postExpences} className={classes.save}>
            保存
          </Button>
        </p>
      </form>
    </React.Fragment>
  );
}
