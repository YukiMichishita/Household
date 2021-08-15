import { rootAPIUrl, audience } from '../common/constant';

export const getFormatedDate = (argDate) => {
  let year = argDate.getFullYear();
  let month = ('0' + (argDate.getMonth() + 1)).slice(-2);
  let date = ('0' + argDate.getDate()).slice(-2);
  return year + '-' + month + '-' + date;
};
export const getFormatedMonth = (argDate) => {
  let year = argDate.getFullYear();
  let month = ('0' + (argDate.getMonth() + 1)).slice(-2);
  return year + '-' + month;
};
export const makeJSDate = (strDate) => {
  return new Date(strDate.slice(0, 4), String(Number(strDate.slice(5, 7) - 1)), strDate.slice(8, 10));
};

export const toJson = async (res) => {
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    throw new Error(json.message);
  }
};

export const accountBookFetch = async (url, body, getAccessToken, method) => {
  const token = await getAccessToken({
    audience: audience,
  });
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  const request = {
    method,
    headers,
  };
  if (method != 'GET') {
    request.body = JSON.stringify(body);
    console.log(request);
  }

  const res = await fetch(rootAPIUrl + url, request);
  if (res) {
    return toJson(res);
  }
};
