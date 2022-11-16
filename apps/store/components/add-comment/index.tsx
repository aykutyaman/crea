import { ReactNode, useState } from 'react';
import * as D from '@crea/domain';
import getConfig from 'next/config';
import * as styles from './index.css';

export interface AddCommentProps {
  children?: ReactNode;
  productId: D.ID;
}

const {
  publicRuntimeConfig: { API },
} = getConfig();

export const AddComment = ({ productId }: AddCommentProps) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (_x: React.MouseEvent<HTMLButtonElement>) => {
    fetch(`${API}/comment`, {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({ comment, productId }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => data);
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
