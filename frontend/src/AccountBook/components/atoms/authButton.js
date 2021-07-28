import React from 'react';
import Button from '@material-ui/core/Button';

export default function AuthButton(props) {
  if (props.isLoading) {
    return <Button className={props.classes.authButton}>Loading</Button>;
  }
  if (props.isAuthenticated) {
    return (
      <Button
        className={props.classes.authButton}
        onClick={props.handleClickLogoutButton}
      >
        LOGOUT
      </Button>
    );
  }
  return (
    <Button
      className={props.classes.authButton}
      onClick={props.handleClickLoginButton}
    >
      LOGIN
    </Button>
  );
}
