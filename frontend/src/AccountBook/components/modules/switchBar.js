import React, { useState, Children, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../../style/switchBar';
import spendingIconInactive from '../../static/spendingIcon.png';
import spendingIconActive from '../../static/spendingIconActive.png';
import incomeIconInactive from '../../static/incomeIcon.png';
import incomeIconActive from '../../static/incomeIconActive.png';
import { switchSpending, switchIncome } from '../../stores/mode';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';

export default function SwitchBar(props) {
  const classes = useStyles();
  const history = useHistory();
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const [spendingIcon, setSpendingIcon] = useState(spendingIconInactive);
  const [incomeIcon, setIncomeIcon] = useState(incomeIconInactive);

  useEffect(() => {
    if (mode == 'spending') {
      setSpendingIcon(spendingIconActive);
      setIncomeIcon(incomeIconInactive);
    } else {
      setSpendingIcon(spendingIconInactive);
      setIncomeIcon(incomeIconActive);
    }
  }, [mode]);

  return (
    <div>
      <AppBar position="fixed" className={classes.switchBar}>
        <Paper
          className={classes.incomeButton}
          onClick={() => {
            dispatch(switchIncome());
          }}
          elevation={3}
        >
          <img className={classes.incomeIcon} src={incomeIcon} />
        </Paper>
        <Paper
          className={classes.spendingButton}
          onClick={() => {
            dispatch(switchSpending());
          }}
          elevation={3}
        >
          <img className={classes.spendingIcon} src={spendingIcon} />
        </Paper>
      </AppBar>
    </div>
  );
}
