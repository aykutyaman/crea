import { ReactNode } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import * as D from '@crea/domain';
import * as styles from './index.css';

export interface ComponentNameProps {
  children?: ReactNode;
  score: D.Score;
}

export const ComponentName = ({ score }: ComponentNameProps) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => i < score);

  return (
    <ul className={styles.list}>
      {stars.map((filled, i) => (
        <li key={i}>
          {filled ? (
            <AiFillStar className={styles.filled} />
          ) : (
            <AiOutlineStar />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ComponentName;
