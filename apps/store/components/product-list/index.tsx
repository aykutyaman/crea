import { ReactNode } from 'react';
import * as D from '@crea/domain';
import ProductListItem from '../product-list-item';
import * as styles from './index.css';

export interface ProductListProps {
  children?: ReactNode;
  products: D.Products;
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul className={styles.productList}>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
