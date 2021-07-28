import React from 'react';
import SelectMonth from '../modules/selectMonth';
import PerMonthTable from '../atoms/perMonthTable';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { withStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  addCircleIcon: { position: 'relative', fontSize: 80, top: 1200, left: 750 },
  selectMonthText: {
    position: 'relative',
    width: 200,
    fontSize: 50,
    height: 50,
    top: 150,
    left: 650,
    boxSizing: 'border-box',
  },
});

export default function ExpencesPerMonth({ classes, expences, yearMonth, setYearMonth, loading, handleLink }) {
  classes = useStyles();
  if (loading) {
    return <div />;
  }
  return (
    <React.Fragment>
      <div>
        <SelectMonth
          id={'AccountYearMonth'}
          label={'会計月'}
          setValue={setYearMonth}
          defaultValue={yearMonth}
          classes={classes}
        />
        <PerMonthTable rows={expences} classes={classes} handleLink={handleLink} />
      </div>{' '}
      <AddCircleIcon
        className={classes.addCircleIcon}
        onClick={() => {
          handleLink('CreateExpences', {});
        }}
      />
    </React.Fragment>
  );
}
