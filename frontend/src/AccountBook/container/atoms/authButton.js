import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AuthButton from '../../components/atoms/authButton';

const EnhancedAuthButton = (props) => {
  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  async function handleClickLoginButton() {
    await loginWithRedirect({
      appState: {
        path: window.location.pathname,
      },
    });
  }

  function handleClickLogoutButton() {
    logout({
      localOnly: true,
    });
  }

  return (
    <AuthButton
      isLoading={isLoading}
      isAuthenticated={isAuthenticated}
      handleClickLoginButton={handleClickLoginButton}
      handleClickLogoutButton={handleClickLogoutButton}
      classes={props.classes}
    />
  );
};

export default EnhancedAuthButton;
