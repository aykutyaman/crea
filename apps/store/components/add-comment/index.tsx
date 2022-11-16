import { ReactNode, useState } from 'react';
import * as D from '@crea/domain';
import getConfig from 'next/config';
import { useQuery } from 'react-query';
import * as styles from './index.css';

export interface AddCommentProps {
  children?: ReactNode;
  productId: D.ID;
  onSubmit: (comment: string) => void;
}

const {
  publicRuntimeConfig: { API },
} = getConfig();

export const AddComment = ({ productId, onSubmit }: AddCommentProps) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (_x: React.MouseEvent<HTMLButtonElement>) => {
    onSubmit(comment);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        onChange={handleInputChange}
        placeholder="Your comment..."
        className={styles.input}
      />

      <button onClick={handleSubmit} className={styles.button}>
        Add Comment
      </button>
    </div>
  );
};

export default AddComment;
