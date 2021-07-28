import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../style/spendingPerMonth';
import { perMonthInitialState } from '../common/initialStates';
import { getSpendingPerMonth } from '../api/CRUDSpending';
import { getFormatedDate } from '../common/commonFunction';
import { useAuth0 } from '@auth0/auth0-react';

const useSpendingPerMonth = () => {
  const classes = useStyles();
  const [spendings, setSpending] = useState(perMonthInitialState);
  const history = useHistory();
  const [yearMonth, setYearMonth] = useState(getFormatedDate(new Date()).slice(0, 7));
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(true);

  const handleLink = (path, props) => {
    history.push({ pathname: path, state: { props: props } });
  };

  useEffect(() => {
    if (isAuthenticated) {
      getSpendingPerMonth(user.sub, yearMonth, getAccessTokenSilently)
        .then((s) => {
          setSpending(s);
          setLoading(false);
        })
        .catch((e) => {
          throw new Error(e);
        });
    }
  }, [isAuthenticated, yearMonth]);

  return [classes, spendings, yearMonth, setYearMonth, loading, handleLink];
};

export default useSpendingPerMonth;
