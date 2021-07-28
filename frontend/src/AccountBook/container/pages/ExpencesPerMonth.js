import React from 'react';
import useSpendingPerMonth from '../../hooks/use-spendingPerMonth';
import useIncomePerMonth from '../../hooks/use-incomePerMonth';
import ExpencesPerMonth from '../../components/pages/ExpencesPerMonth';
import { useSelector } from 'react-redux';

function SpendingPerMonth() {
  const [classes, spendings, yearMonth, setYearMonth, loading, handleLink] = useSpendingPerMonth();
  return (
    <ExpencesPerMonth
      classes={classes}
      expences={spendings}
      yearMonth={yearMonth}
      setYearMonth={setYearMonth}
      loading={loading}
      handleLink={handleLink}
    />
  );
}

function IncomePerMonth() {
  const [classes, incomes, yearMonth, setYearMonth, loading, handleLink] = useIncomePerMonth();
  return (
    <ExpencesPerMonth
      classes={classes}
      expences={incomes}
      yearMonth={yearMonth}
      setYearMonth={setYearMonth}
      loading={loading}
      handleLink={handleLink}
    />
  );
}

export default function EnhancedExpencesPerMonth() {
  const mode = useSelector((state) => state.mode);

  if (mode === 'spending') {
    return <SpendingPerMonth />;
  } else {
    return <IncomePerMonth />;
  }
}
