import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    margin: '13% 0 0 0',
    '& > p': {
      margin: '0 auto 7% auto',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
    },
  },
  // 会計日
  selectMonthParagraph: {
    alignItems: 'flex-center',
  },
  switchIcon: { margin: '5% 0' },
  selectMonth: {
    width: '40%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    margin: '0 3% 0 0',
    position: 'relative',
    right: '0',
    '& > div': { margin: '3% 0 0 3%' },
  },
  accountDate: { width: '100%' },
  beginMonth: { width: '100%' },
  endMonth: { width: '100%' },
  multiMonthsDate: { width: '50%' },
  // カテゴリ・サブカテゴリ
  categoryParagraph: {
    alignItems: 'flex-end',
  },
  categoryForm: {
    minWidth: '35%',
    margin: '0 5%',
  },
  subcategoryParagraph: { alignItems: 'flex-end' },
  subcategoryForm: {
    minWidth: '35%',
    margin: '0 5%',
    whiteSpace: 'nowrap',
  },
  // 金額・コメント
  amount: {
    minWidth: '40%',
  },
  comment: {
    minWidth: '60%',
  },
  //保存・削除ボタン
  buttons: { display: 'flex', flexWrap: 'wrap', width: 0, '& > button': { margin: '10px 0' } },
  delete: {
    backgroundColor: '#FF6666',
  },
  // 　ダイアログ
  addCategoryDialog: { width: '60%', position: 'relative' },
  addCategoryIcon: { margin: '0' },
  dialogHeader: {
    display: 'flex',
    backgroundColor: 'black',
  },
  dialogLabel: { width: '50%' },
  dialogAction: {},
  tabPanel: {},
  categoryName: {},
  editDialogContent: {
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    '& > div': { margin: '0 auto' },
    '&>svg': { margin: '0 3%' },
  },
}));

export default useStyles;
