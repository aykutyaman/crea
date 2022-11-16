import { ReactNode } from 'react';
import * as D from '@crea/domain';

export interface CommentProps {
  children?: ReactNode;
  comment: D.Comment;
}

export const Comment = ({ comment }: CommentProps) => {
  return <li key={comment.id}>{comment.text}</li>;
};

export default Comment;
