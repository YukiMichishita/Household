import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  switchBar: {
    backgroundColor: 'whitesmoke',
    flexDirection: 'row',
    position: 'fixed',
    top: 'auto',
    bottom: '0px',
    left: '0px',
    height: '7%',
    width: '100%',
    margin: '0',
    padding: '0',
  },
  incomeButton: {
    backgroundColor: 'whitesmoke',
    height: '100%',
    width: '50%',
    textAlign: 'center',
  },
  incomeIcon: {
    height: 'auto',
    width: '24%',
    margin: 'auto',
  },
  spendingButton: {
    backgroundColor: 'whitesmoke',
    height: '100%',
    width: '50%',
    textAlign: 'center',
  },
  spendingIcon: {
    height: 'auto',
    width: '27%',
    margin: 'auto auto',
  },
});
