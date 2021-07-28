import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  switchBar: {
    display: 'inline-flex',
    backgroundColor: 'whitesmoke',
    top: 1400,
    bottom: 0,
    height: '15%',
    width: '100%',
    position: 'absolute',
  },
  incomeButton: {
    backgroundColor: 'whitesmoke',
    height: '100%',
    width: '50%',
    position: 'absolute',
  },
  incomeIcon: {
    height: '30%',
    width: '25%',
    position: 'absolute',
    left: '35%',
    top: '5%',
  },
  spendingButton: {
    backgroundColor: 'whitesmoke',
    height: '100%',
    width: '50%',
    left: '50%',
    position: 'absolute',
  },
  spendingIcon: {
    height: '30%',
    width: '25%',
    top: '3%',
    left: '35%',
    position: 'absolute',
  },
});
