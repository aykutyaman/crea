import { ReactNode, useState } from 'react';
import Image from 'next/image';
import * as D from '@crea/domain';
import * as styles from './index.css';
import Stars from '../../components/stars';
import Tabs from '../../components/tabs';

export interface ProductDetailProps {
  children?: ReactNode;
  product: D.Product;
}

type Tab = 'details' | 'comments';

const tabs: Array<{
  label: string;
  value: Tab;
}> = [
  { label: 'Details', value: 'details' },
  { label: 'Comments', value: 'comments' },
];

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const [tab, setTab] = useState<Tab>('details');

  const date = new Date(Number(product.arrivalDate) * 1000).toLocaleDateString(
    'tr-TR'
  );

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={product.image} alt="Crea" width={300} height={300} />
      </div>
      <div className={styles.summary}>
        <div className={styles.commentsStarsContainer}>
          <Stars score={product.score} />
          <span className={styles.comments}>10 Comments</span>
        </div>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>${product.price}</div>
        <div className={styles.shortDescription}>
          {product.shortDescription}
        </div>
        <div className={styles.arrivalDate}>
          <span className={styles.arrivalDateTitle}>Arrival Date:</span>{' '}
          <span className={styles.arrivalDateContent}>{date}</span>
        </div>
      </div>
      <div className={styles.details}>
        <Tabs tabs={tabs} value={tab} onChange={setTab} />

        {tab === 'details' ? (
          <div>Details Compoment</div>
        ) : (
          <div>Comments Component</div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
