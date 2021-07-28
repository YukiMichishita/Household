import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../style/createSpending';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchSpendingDetail } from '../stores/expences';
import { setOpenPop } from '../stores/openPop';
import { updateSpending, deleteSpending } from '../api/CRUDSpending';

const useUpdateSpending = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const spending = useSelector((state) => state.expences);
  const [disabled, setDisaled] = useState(true);
  const update = async () => {
    await updateSpending(spending.item, getAccessTokenSilently);
    dispatch(setOpenPop('保存しました'));
  };
  const del = async () => {
    if (window.confirm('削除しますか？')) {
      await deleteSpending(spending.item.id, getAccessTokenSilently);
      dispatch(setOpenPop('削除しました'));
    }
  };

  useEffect(() => {
    setDisaled(spending.item.category === '' || spending.item.amount <= 0);
  }, [spending.item.category, spending.item.amount]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchSpendingDetail(props.location.state.props.id, getAccessTokenSilently));
    }
  }, [isAuthenticated, dispatch]);

  return [spending, classes, disabled, update, del];
};

export default useUpdateSpending;
