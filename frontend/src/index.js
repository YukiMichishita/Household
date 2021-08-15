import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(
  <React.Fragment>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
    />
  </React.Fragment>,
  document.querySelector('head'),
);
render(<App />, document.querySelector('#content'));
