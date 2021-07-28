import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  tableBackground: {
    position: 'absolute',
    width: 800,
    top: 250,
    left: 95,
    maxHeight: 940,
    overflow: 'scroll',
  },
  table: {
    width: '100%',
    position: 'relative',
    overflow: 'scroll',
  },
  row: {
    width: '100%',
  },
  tableCell: {
    fontSize: 25,
  },
  tableCellDate: {
    fontSize: 25,
    textDecoration: 'underline',
  },
  head: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 40,
  },
  category: {
    fontSize: 40,
  },
  chartIcon: {
    position: 'relative',
    left: 20,
  },
  body: {
    fontSize: 40,
  },
  selectMonthText: {
    position: 'relative',
    width: 200,
    fontSize: 50,
    height: 50,
    top: 150,
    left: 650,
    boxSizing: 'border-box',
    category: {
      fontSize: 40,
      textDecoration: 'underline',
    },
  },

  addCircleIcon: { position: 'relative', fontSize: 80, top: 1200, left: 750 },
});

export const useRowStyles = makeStyles({
  table: {
    minWidth: 300,
    width: 800,
    position: 'relative',
    top: 170,
    left: 75,
  },
  row: {
    width: '100%',
  },
  head: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 40,
  },
  category: {
    fontSize: 40,
    textDecoration: 'underline',
  },
  body: {
    fontSize: 40,
  },
});
