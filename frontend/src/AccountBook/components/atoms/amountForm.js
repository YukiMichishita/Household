import React from 'react';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => onChange({ target: { value: values.value } })}
      thousandSeparator
      isNumericString
      prefix="¥"
    />
  );
}

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
      InputProps={{
        inputComponent: NumberFormatCustom,
      }}
    />
  );
}
