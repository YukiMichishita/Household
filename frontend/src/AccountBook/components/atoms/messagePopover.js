import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  root: { display: 'flex', justifyContent: 'center', alignItems: 'flex-start', bottom: '8%' },
  messagePopover: {},
});

export default function MessagePopover(props) {
  const classes = useStyles();
  const open = useSelector((state) => state.openPop);
  return (
    <Snackbar className={classes.root} open={Boolean(open)}>
      <Alert className={classes.messagePopover} severity="success">
        {open}
      </Alert>
    </Snackbar>
  );
}
