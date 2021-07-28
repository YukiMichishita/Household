import { useState, useEffect } from 'react';
import useStyles from '../style/createSpending';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearExpences, setMultiMonth, setAccountDate } from '../stores/expences';
import { setOpenPop } from '../stores/openPop';
import { useAuth0 } from '@auth0/auth0-react';
import { createSpending } from '../api/CRUDSpending';
import { makeJSDate, getFormatedDate } from '../common/commonFunction';

const useCreateSpending = () => {
  const classes = useStyles();
  const spending = useSelector((state) => state.expences);
  const dispatch = useDispatch();
  const [disabled, setDisaled] = useState(true);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const multiMonthCreate = async () => {
    let begin = makeJSDate(spending.item.beginMonth + '-01');
    let end = makeJSDate(spending.item.endMonth + '-01');
    for (let d = begin; d <= end; d.setMonth(d.getMonth() + 1)) {
      let accountDate = getFormatedDate(new Date(d.getFullYear(), d.getMonth(), spending.item.multiMonthsDate));
      createSpending({ ...spending.item, account_date: accountDate }, getAccessTokenSilently);
    }
  };
  const create = async () => {
    if (spending.multiMonth) {
      await multiMonthCreate();
    } else {
      await createSpending(spending.item, getAccessTokenSilently);
    }
    dispatch(setOpenPop('保存しました'));
    dispatch(clearExpences());
    dispatch(setUser(user.sub));
  };

  const switchMonth = () => {
    dispatch(setMultiMonth(!spending.multiMonth));
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(clearExpences());
      dispatch(setUser(user.sub));
    }
  }, [isAuthenticated]);

  useEffect(() => {
    setDisaled(spending.item.category === '' || spending.item.amount <= 0);
  }, [spending.item.category, spending.item.amount]);

  return [classes, spending.loading, disabled, spending.multiMonth, switchMonth, create];
};

export default useCreateSpending;
