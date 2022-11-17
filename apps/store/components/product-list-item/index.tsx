import * as D from '@crea/domain';
import Image from 'next/image';
import Link from 'next/link';
import Stars from '../stars';

import * as styles from './index.css';

export interface ProductListItemProps {
  product: D.Product;
}

export function ProductListItem({ product }: ProductListItemProps) {
  return (
    <li className={styles.item}>
      <Image
        src={product.image}
        alt="Crea"
        width={150}
        height={150}
        className={styles.image}
      />
      <Link href={`/products/${product.id}`}>
        <div className={styles.name}>{product.name}</div>{' '}
      </Link>

      <Stars score={product.score} />
    </li>
  );
}

export default ProductListItem;
