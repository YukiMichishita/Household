import React, { useState, Children } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../../style/menu';
import AuthButton from '../../container/atoms/authButton';
import HomeIcon from '@material-ui/icons/Home';

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const history = useHistory();

  function handleLink(path) {
    history.push({ pathname: path, props: undefined });
  }

  return (
    <div>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar>
          <AuthButton classes={classes} />
          <HomeIcon
            className={classes.menuButton}
            onClick={() => {
              handleLink('expencesPerMonth');
            }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
