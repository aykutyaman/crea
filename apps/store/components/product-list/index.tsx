import { ReactNode } from 'react';
import * as D from '@crea/domain';
import ProductListItem from '../product-list-item';

export interface ProductListProps {
  children?: ReactNode;
  products: D.Products;
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div>
      <ul className="">
        {products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
