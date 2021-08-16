import React from 'react';
import Button from '@material-ui/core/Button';

export default function AuthButton(props) {
  return (
    <Button className={props.classes.authButton} onClick={props.handleClickLogoutButton}>
      LOGOUT
    </Button>
  );
}
