import React from 'react';
import TextField from '@material-ui/core/TextField';
import { setBeginMonth, setEndMonth, setMultiMonthDate } from '../../stores/expences';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function SelectBeginEndMonth(props) {
  const expences = useSelector((state) => state.expences).item;
  const dispatch = useDispatch();

  return (
    <div className={props.classes.selectMonths}>
      <TextField
        label={'From'}
        type="month"
        value={expences.beginMonth}
        className={props.classes.beginMonth}
        onChange={(e) => dispatch(setBeginMonth(e.target.value))}
      />
      <TextField
        label={'To'}
        type="month"
        value={expences.endMonth}
        className={props.classes.endMonth}
        onChange={(e) => dispatch(setEndMonth(e.target.value))}
      />
      <Select
        value={expences.multiMonthsDate}
        className={props.classes.multiMonthsDate}
        onChange={(e) => {
          dispatch(setMultiMonthDate(e.target.value));
        }}
      >
        {[...Array(12).keys()].map((day) => (
          <MenuItem value={day + 1} key={day + 1}>
            {String(day + 1) + '日'}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
