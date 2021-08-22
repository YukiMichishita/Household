import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  AppBar: {
    position: 'fixed',
    margin: '0',
    padding: '0',
    backgroundColor: 'black',
    width: '100%',
    height: '7%',
  },

  toolBar: { height: '100%' },

  menuButton: {
    margin: '0 0 0 auto',
    position: 'relative',
    height: '70%',
    width: '10%',
    color: 'white',
  },

  authButton: {
    margin: '0 0 0 0',
    position: 'relative',
    color: 'white',
    height: '90%',
    width: '10%',
  },
});
