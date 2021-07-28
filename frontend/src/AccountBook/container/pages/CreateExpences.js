import React from 'react';
import { useSelector } from 'react-redux';
import CreateExpences from '../../components/pages/CreateExpences';
import useCreateSpending from '../../hooks/use-createSpending';
import useCreateIncome from '../../hooks/use-createIncome';

function CreateSpending() {
  const [classes, loading, disabled, multiMonth, switchMonth, postSpending] = useCreateSpending();

  return (
    <CreateExpences
      classes={classes}
      loading={loading}
      disabled={disabled}
      multiMonth={multiMonth}
      switchMonth={switchMonth}
      postExpences={postSpending}
    />
  );
}

function CreateIncome() {
  const [classes, loading, disabled, multiMonth, switchMonth, postIncome] = useCreateIncome();

  return (
    <CreateExpences
      classes={classes}
      loading={loading}
      disabled={disabled}
      multiMonth={multiMonth}
      switchMonth={switchMonth}
      postExpences={postIncome}
    />
  );
}
export default function EnhancedCreateExpences() {
  const mode = useSelector((state) => state.mode);

  if (mode === 'spending') {
    return <CreateSpending />;
  } else {
    return <CreateIncome />;
  }
}
