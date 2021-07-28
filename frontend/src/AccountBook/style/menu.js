import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  AppBar: {
    backgroundColor: 'black',
    width: '100%',
    position: 'absolute',
    height: '5%',
  },

  menuButton: {
    margin: '0 0 0 auto',
    height: 100,
    width: 100,
    color: 'white',
  },

  authButton: {
    backgroundColor: 'black',
    color: 'white',
  },
});
