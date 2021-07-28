import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../style/createIncome';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchIncomeDetail } from '../stores/expences';
import { setOpenPop } from '../stores/openPop';
import { updateIncome, deleteIncome } from '../api/CRUDIncome';

const useUpdateIncome = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const income = useSelector((state) => state.expences);
  const [disabled, setDisaled] = useState(true);
  const update = async () => {
    await updateIncome(income.item, getAccessTokenSilently);
    dispatch(setOpenPop('保存しました'));
  };
  const del = async () => {
    if (window.confirm('削除しますか？')) {
      await deleteIncome(income.item.id, getAccessTokenSilently);
      dispatch(setOpenPop('削除しました'));
    }
  };

  useEffect(() => {
    setDisaled(income.item.category === '' || income.item.amount <= 0);
  }, [income.item.category, income.item.amount]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchIncomeDetail(props.location.state.props.id, getAccessTokenSilently));
    }
  }, [isAuthenticated, dispatch]);

  return [income, classes, disabled, update, del];
};

export default useUpdateIncome;
