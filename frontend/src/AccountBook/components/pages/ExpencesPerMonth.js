import React from 'react';
import SelectMonth from '../modules/selectMonth';
import PerMonthTable from '../atoms/perMonthTable';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { withStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  nodata: { textAlign: 'center', top: '40%', position: 'relative' },

  selectMonthArea: {
    width: '100%',
    height: '15%',
    margin: '0',
    padding: '0',
    position: 'absolute',
    textAlign: 'center',
  },
  tableArea: {
    width: '100%',
    height: '75%',
    margin: '0',
    padding: '0',
    position: 'absolute',
    top: '15%',
  },
  addCircleIconArea: {
    width: '100%',
    height: '10%',
    margin: '0',
    padding: '0',
    position: 'absolute',
    top: '90%',
  },
  addCircleIcon: { right: '10%', top: '3%', position: 'absolute', fontSize: '3rem' },
  selectMonthText: { top: '28%', margin: '0', padding: 0 },
});

export default function ExpencesPerMonth({ classes, expences, yearMonth, setYearMonth, loading, handleLink }) {
  classes = useStyles();
  if (loading) {
    return <p className={classes.nodata}>loading...</p>;
  }

  return (
    <React.Fragment>
      <div className={classes.selectMonthArea}>
        <SelectMonth
          id={'AccountYearMonth'}
          label={'会計月'}
          setValue={setYearMonth}
          defaultValue={yearMonth}
          classes={classes}
        />
      </div>
      {expences.length > 0 ? (
        <React.Fragment>
          <div className={classes.tableArea}>
            <PerMonthTable rows={expences} classes={classes} handleLink={handleLink} />
          </div>
          <div className={classes.addCircleIconArea}>
            <AddCircleIcon
              className={classes.addCircleIcon}
              onClick={() => {
                handleLink('CreateExpences', {});
              }}
            />
          </div>
        </React.Fragment>
      ) : (
        <p className={classes.nodata}>データがありません</p>
      )}
    </React.Fragment>
  );
}
