import React from 'react';
import { setAccountDate } from '../../stores/expences';
import { useDispatch, useSelector } from 'react-redux';
import AccountDateForm from '../../components/atoms/accountDateForm';

export default function EnhancedAccountDateForm(props) {
  const expences = useSelector((state) => state.expences).item;
  const dispatch = useDispatch();
  return (
    <AccountDateForm
      classes={props.classes}
      data={expences}
      setAccountDate={(value) => dispatch(setAccountDate(value))}
    />
  );
}
