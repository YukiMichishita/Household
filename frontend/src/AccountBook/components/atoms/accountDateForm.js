import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function AccountDateForm({ classes, data, setAccountDate }) {
  return (
    <TextField
      id="account_date"
      label="会計日"
      type="date"
      value={data.account_date}
      onChange={(e) => {
        setAccountDate(e.target.value);
      }}
      className={classes.accountDate}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
