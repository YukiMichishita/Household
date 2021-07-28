import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function AmountForm({ classes, data, setAmount }) {
  return (
    <TextField
      className={classes.amount}
      label="金額"
      onChange={(e) => {
        setAmount(e.target.value);
      }}
      value={data.amount}
      id="amount"
      autoComplete="off"
    />
  );
}
