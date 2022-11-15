import { ReactNode } from 'react';
import * as D from '@crea/domain';
import * as styles from './index.css';

export interface ProductDetailProps {
  children?: ReactNode;
  product: D.Product;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div className={styles.container}>
      <h1>Welcome to ProductDetail!</h1>
    </div>
  );
};

export default ProductDetail;
