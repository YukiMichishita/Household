export const spendingPerMonthURL = 'spendinPerMonth';
export const spendingInputURL = 'spendingInput';
export const audience = 'https://accountbook/api/user';

let rootFrontUrlInternal;
let rootAPIUrlInternal;
let clientIdInternal;
let issuerInternal;

if (process.env.NODE_ENV === 'development') {
  rootFrontUrlInternal = process.env.REACT_APP_TEST_FRONT_URL;
  rootAPIUrlInternal = process.env.REACT_APP_TEST_BACKEND_URL;
  clientIdInternal = process.env.REACT_APP_TEST_CLIENT_ID;
  issuerInternal = process.env.REACT_APP_TEST_AUTH0_PROVIDER;
} else if (process.env.NODE_ENV === 'production') {
  rootFrontUrlInternal = process.env.REACT_APP_PROD_FRONT_URL;
  rootAPIUrlInternal = process.env.REACT_APP_PROD_BACKEND_URL;
  clientIdInternal = process.env.REACT_APP_PROD_CLIENT_ID;
  issuerInternal = process.env.REACT_APP_PROD_AUTH0_PROVIDER;
}

export const rootFrontUrl = rootFrontUrlInternal;
export const rootAPIUrl = rootAPIUrlInternal;
export const clientId = clientIdInternal;
export const issuer = issuerInternal;
