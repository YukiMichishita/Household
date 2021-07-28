import React from 'react';
import { useSelector } from 'react-redux';
import UpdateExpences from '../../components/pages/UpdateExpences';
import useUpdateSpending from '../../hooks/use-updateSpending';
import useUpdateIncome from '../../hooks/use-updateIncome';

function UpdateSpending(props) {
  const [spending, classes, disabled, postSpending, deleteSpending] = useUpdateSpending(props);

  return (
    <UpdateExpences
      expences={spending}
      classes={classes}
      disabled={disabled}
      postExpences={postSpending}
      deleteExpences={deleteSpending}
    />
  );
}

function UpdateIncome(props) {
  const [income, classes, disabled, postIncome, deleteIncome] = useUpdateIncome(props);

  return (
    <UpdateExpences
      expences={income}
      classes={classes}
      disabled={disabled}
      postExpences={postIncome}
      deleteExpences={deleteIncome}
    />
  );
}

export default function EnhancedUpdateExpences(props) {
  const mode = useSelector((state) => state.mode);

  if (mode === 'spending') {
    return <UpdateSpending location={props.location} />;
  } else {
    return <UpdateIncome location={props.location} />;
  }
}
