import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    position: 'relative',
    top: 50,
    bottom: 50,
    left: 250,
  },
  accountDate: {
    position: 'relative',
    minWidth: 120,
    top: 50,
    bottom: 50,
    left: 100,
  },
  switchIcon: { position: 'relative', top: 20, bottom: 40, left: 300, fontSize: 30 },
  beginMonth: { position: 'relative', display: 'block' },
  endMonth: { position: 'relative', display: 'block', top: 10 },
  multiMonthsDate: { position: 'relative', maxWidth: 50, top: 30, left: 120 },
  selectMonths: { position: 'relative', top: 70, left: 100 },
  selectMonth: { position: 'relative' },
  amount: {
    minWidth: 120,
    position: 'relative',
    top: 220,
    left: 100,
  },
  comment: {
    minWidth: 120,
    position: 'relative',
    top: 280,
    left: -70,
  },
  save: {
    position: 'relative',
    top: 410,
    left: -200,
  },
  delete: {
    position: 'relative',
    top: 470,
    left: -265,
    backgroundColor: '#FF6666',
  },
  categoryForm: {
    minWidth: 120,
    position: 'relative',
    top: 80,
    left: 140,
  },
  subcategoryForm: {
    minWidth: 120,
    position: 'relative',
    top: 80,
    left: 140,
    whiteSpace: 'nowrap',
  },
  dialogHeader: {
    display: 'flex',
    backgroundColor: 'black',
  },
  dialogLabel: {
    width: '50%',
  },
  dialogAction: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  tabPanel: {
    width: 400,
    height: 200,
  },
  addCategoryIcon: {
    position: 'relative',
    top: 40,
    left: 280,
  },
  addCategoryDialog: {
    position: 'relative',
    bottom: 700,
    left: -150,
  },
  categoryName: {
    potition: 'relative',
    left: 95,
  },
  editDialogContent: {
    position: 'relative',
    height: '100%',
    width: '100%',
    left: 50,
  },
  editIcon1: {
    position: 'relative',
    fontSize: 40,
    top: 10,
    left: 130,
  },
  deleteIcon1: {
    position: 'relative',
    fontSize: 40,
    top: 10,
    left: 130,
  },
  editIcon2: {
    position: 'relative',
    fontSize: 40,
    top: 10,
    left: 110,
  },
  deleteIcon2: {
    position: 'relative',
    fontSize: 40,
    top: 10,
    left: 110,
  },
  dialogCategory: {
    potition: 'relative',
    minWidth: 120,
    left: 70,
  },
  dialogCategory2: {
    potition: 'relative',
    minWidth: 120,
    left: 110,
  },
  dialogCategoryEdit: {
    potition: 'relative',
    minWidth: 120,
    left: 60,
  },
  dialogSubcategory: {
    potition: 'relative',
    minWidth: 120,
    left: 60,
  },

  selectMonthText: {
    width: 200,
    fontSize: 50,
    height: 50,
    top: 90,
    left: 650,
    boxSizing: 'border-box',
  },
}));

export default useStyles;
