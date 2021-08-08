import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function AmountForm({ classes, data, setComment }) {
  return (
    <TextField
      id="comment"
      label="コメント"
      multiline
      rows={4}
      className={classes.comment}
      value={data.comment}
      onChange={(e) => {
        setComment(e.target.value);
      }}
    />
  );
}
