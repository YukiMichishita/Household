import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAmount } from '../../stores/expences';
import AmountForm from '../../components/atoms/amountForm';

export default function EnhancedAmountForm(props) {
  const expences = useSelector((state) => state.expences).item;
  const dispatch = useDispatch();
  return <AmountForm classes={props.classes} data={expences} setAmount={(value) => dispatch(setAmount(value))} />;
}
