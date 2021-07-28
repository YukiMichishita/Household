import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  messagePopover: {
    zIndex: '100',
    potision: 'absolute',
    bottom: 2000,
    left: 450,
    transition: '5s',
  },
}));

export default function MessagePopover(props) {
  const classes = useStyles();
  const open = useSelector((state) => state.openPop);
  return (
    <div>
      <Snackbar className={classes.messagePopover} open={Boolean(open)}>
        <Alert severity="success">{open}</Alert>
      </Snackbar>
    </div>
  );
}
