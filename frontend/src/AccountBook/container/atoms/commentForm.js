import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setComment } from '../../stores/expences';
import CommentForm from '../../components/atoms/commentForm';

export default function EnhancedCommentForm(props) {
  const expences = useSelector((state) => state.expences).item;
  const dispatch = useDispatch();
  return <CommentForm classes={props.classes} data={expences} setComment={(value) => dispatch(setComment(value))} />;
}
