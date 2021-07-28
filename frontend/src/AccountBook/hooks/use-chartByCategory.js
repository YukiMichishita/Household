import React, { useState, useEffect } from 'react';
import { getSpendingForChart } from '../api/CRUDSpending';
import { getIncomeForChart } from '../api/CRUDIncome';
import { byCategoryInitialState } from '../common/initialStates';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchSpendingCategories } from '../stores/category';
import { fetchIncomeCategories } from '../stores/category';
import { setCategoryValue } from '../stores/categoryMultiValues';
import useStyles from '../style/chartByCategory';

const useChartByCategory = (props) => {
  const [data, setData] = useState(byCategoryInitialState);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const selectedCategories = useSelector((state) => state.categoryMultiValues);
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }
    dispatch(setCategoryValue([]));
    if (mode === 'spending') {
      dispatch(fetchSpendingCategories(user.sub, getAccessTokenSilently));
    } else {
      dispatch(fetchIncomeCategories(user.sub, getAccessTokenSilently));
    }
  }, [isAuthenticated, mode]);
  useEffect(() => {
    dispatch(setCategoryValue([props.location.state.props.category]));
  }, []);
  useEffect(async () => {
    if (!isAuthenticated || selectedCategories.length <= 0) {
      return;
    }
    if (mode === 'spending') {
      const spending = await getSpendingForChart(user.sub, selectedCategories.join(','), '', getAccessTokenSilently);
      setData(spending);
    } else {
      const income = await getIncomeForChart(user.sub, selectedCategories.join(','), '', getAccessTokenSilently);
      setData(income);
    }
  }, [selectedCategories, mode]);

  return [data, classes];
};

export default useChartByCategory;
