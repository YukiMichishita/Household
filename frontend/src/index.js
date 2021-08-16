import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { issuer, clientId } from './AccountBook/common/constant';

render(
  <React.Fragment>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
    />
  </React.Fragment>,
  document.querySelector('head'),
);
render(
  <Auth0Provider
    domain={issuer}
    clientId={clientId}
    redirectUri={window.location.origin + '/expencesPerMonth'}
    useRefreshTokens={true}
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>,
  document.querySelector('#content'),
);
