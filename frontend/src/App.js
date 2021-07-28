import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ExpencesPerMonth from './AccountBook/container/pages/ExpencesPerMonth';
import CreateExpences from './AccountBook/container/pages/CreateExpences';
import UpdateExpences from './AccountBook/container/pages/UpdateExpences';
import ButtonAppBar from './AccountBook/components/modules/menu';
import SwitchBar from './AccountBook/components/modules/switchBar';
import SpendingChartByCategory from './AccountBook/container/pages/ChartByCategory';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import store from './AccountBook/reducer';

const useStyles = makeStyles({ root: { height: '100%', width: '100%', position: 'absolute' } });
function App() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Auth0Provider
        domain={'dev-yuki.jp.auth0.com'}
        clientId={'qBgKdbrCXfYsAVCNCHnpWeugj3fZHsNR'}
        redirectUri={window.location.origin}
      >
        <Provider store={store}>
          <Paper className={classes.root}>
            <Router>
              <ButtonAppBar />
              <Switch>
                <Route path="/expencesPerMonth" exact component={ExpencesPerMonth} />
                <Route path="/createExpences" exact component={CreateExpences} />
                <Route path="/updateExpences" exact component={UpdateExpences} />
                <Route path="/chartByCategory" exact component={SpendingChartByCategory} />
              </Switch>
            </Router>
            <SwitchBar />
          </Paper>
        </Provider>
      </Auth0Provider>
    </Paper>
  );
}

export default App;
