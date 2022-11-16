import { ReactNode } from 'react';
import * as D from '@crea/domain';
import * as styles from './index.css';
import Stars from '../../components/stars';

export interface CommentProps {
  children?: ReactNode;
  comment: D.Comment;
}

export const Comment = ({ comment }: CommentProps) => {
  const date = new Date(Number(comment.date) * 1000).toLocaleString();
  return (
    <li className={styles.item}>
      <div className={styles.nameStar}>
        <span>{comment.fullname}</span>
        <Stars score={comment.score} />
      </div>
      <p className={styles.date}>{date}</p>
      <p className={styles.text}>{comment.text}</p>
    </li>
  );
};

export default Comment;
