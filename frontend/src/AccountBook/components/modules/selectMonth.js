import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function SelectMonth(props) {
  return (
    <TextField
      id={props.id}
      label={props.label}
      type="month"
      className={props.classes.selectMonthText}
      onChange={(e) => props.setValue(e.target.value)}
      defaultValue={props.defaultValue}
    />
  );
}
