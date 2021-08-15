import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ExpencesPerMonth from './AccountBook/container/pages/ExpencesPerMonth';
import CreateExpences from './AccountBook/container/pages/CreateExpences';
import UpdateExpences from './AccountBook/container/pages/UpdateExpences';
import ButtonAppBar from './AccountBook/components/modules/menu';
import SwitchBar from './AccountBook/components/modules/switchBar';
import SpendingChartByCategory from './AccountBook/container/pages/ChartByCategory';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './AccountBook/reducer';
import { issuer, clientId } from './AccountBook/common/constant';

const useGlobalStyles = makeStyles({
  '@global': {
    body: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      '& #content': { width: '100%', height: '100%', margin: 0, padding: 0, position: 'absolute', fontSize: '14px' },
    },
  },
});
const theme = createMuiTheme({});

function MyThemeProvider({ children }) {
  useGlobalStyles();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

function App() {
  const style = makeStyles({
    root: { width: '100%', height: '86%', margin: '0', padding: '0', position: 'absolute', top: '7%' },
  })();
  return (
    <React.Fragment>
      <MyThemeProvider>
        <Auth0Provider
          domain={issuer}
          clientId={clientId}
          redirectUri={window.location.origin}
          useRefreshTokens={true}
          cacheLocation="localstorage"
        >
          <Provider store={store}>
            <Router>
              <ButtonAppBar />
              <Paper className={style.root} square elevation={0}>
                <Switch>
                  <Route path="/expencesPerMonth" exact component={ExpencesPerMonth} />
                  <Route path="/createExpences" exact component={CreateExpences} />
                  <Route path="/updateExpences" exact component={UpdateExpences} />
                  <Route path="/chartByCategory" exact component={SpendingChartByCategory} />
                </Switch>
              </Paper>
              <SwitchBar />
            </Router>
          </Provider>
        </Auth0Provider>
      </MyThemeProvider>
    </React.Fragment>
  );
}

export default App;
