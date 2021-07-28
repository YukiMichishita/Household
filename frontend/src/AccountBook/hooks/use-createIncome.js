import { useState, useEffect } from 'react';
import useStyles from '../style/createIncome';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearExpences, setMultiMonth, setAccountDate } from '../stores/expences';
import { setOpenPop } from '../stores/openPop';
import { useAuth0 } from '@auth0/auth0-react';
import { createIncome } from '../api/CRUDIncome';
import { makeJSDate, getFormatedDate } from '../common/commonFunction';

const useCreateIncome = () => {
  const classes = useStyles();
  const income = useSelector((state) => state.expences);
  const dispatch = useDispatch();
  const [disabled, setDisaled] = useState(true);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const multiMonthCreate = async () => {
    let begin = makeJSDate(income.item.beginMonth + '-01');
    let end = makeJSDate(income.item.endMonth + '-01');
    for (let d = begin; d <= end; d.setMonth(d.getMonth() + 1)) {
      let accountDate = getFormatedDate(new Date(d.getFullYear(), d.getMonth(), income.item.multiMonthsDate));
      createIncome({ ...income.item, account_date: accountDate }, getAccessTokenSilently);
    }
  };
  const create = async () => {
    if (income.multiMonth) {
      await multiMonthCreate();
    } else {
      await createIncome(income.item, getAccessTokenSilently);
    }
    dispatch(setOpenPop('保存しました'));
    dispatch(clearExpences());
    dispatch(setUser(user.sub));
  };

  const switchMonth = () => {
    dispatch(setMultiMonth(!income.multiMonth));
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(clearExpences());
      dispatch(setUser(user.sub));
    }
  }, [isAuthenticated]);

  useEffect(() => {
    setDisaled(income.item.category === '' || income.item.amount <= 0);
  }, [income.item.category, income.item.amount]);

  return [classes, income.loading, disabled, income.multiMonth, switchMonth, create];
};

export default useCreateIncome;
