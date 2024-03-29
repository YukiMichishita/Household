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
  sumArea: {
    width: '100%',
    height: '4%',
    margin: '0',
    padding: '0',
    position: 'absolute',
    top: '15%',
  },
  sum: { padding: '0', margin: '0', right: '10%', position: 'absolute', fontSize: '0.9rem' },
  tableArea: {
    width: '100%',
    height: '70%',
    margin: '0',
    padding: '0',
    position: 'absolute',
    top: '20%',
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
    <>
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
        <>
          <div className={classes.sumArea}>
            <p className={classes.sum}>
              {'合計: ¥' + expences.reduce((sum, element) => sum + element.amount, 0).toLocaleString()}
            </p>
          </div>
          <div className={classes.tableArea}>
            <PerMonthTable rows={expences} classes={classes} handleLink={handleLink} />
          </div>
        </>
      ) : (
        <p className={classes.nodata}>データがありません</p>
      )}
      <div className={classes.addCircleIconArea}>
        <AddCircleIcon
          className={classes.addCircleIcon}
          onClick={() => {
            handleLink('CreateExpences', {});
          }}
        />
      </div>
    </>
  );
}
