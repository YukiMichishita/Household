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
    <React.Fragment>
      <MessagePopover />
      <form noValidate className={classes.form}>
        {/* 会計月選択 */}
        <p className={classes.selectMonthParagraph}>
          <div className={classes.selectMonth}>
            <AccountDateForm classes={classes} />
          </div>
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
        {/* 保存・削除ボタン */}
        <p className={classes.buttons}>
          <Button variant="outlined" disabled={disabled} onClick={postExpences} className={classes.save}>
            保存
          </Button>
          <Button variant="outlined" onClick={deleteExpences} className={classes.delete}>
            削除
          </Button>
        </p>
      </form>
    </React.Fragment>
  );
}
