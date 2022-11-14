import * as D from '@crea/domain';
import Link from 'next/link';

export interface ProductListItemProps {
  product: D.Product;
}

export function ProductListItem({ product }: ProductListItemProps) {
  return (
    <div>
      <li>
        <Link href={`/products/${product.id}`}> {product.name}</Link>
      </li>
    </div>
  );
}

export default ProductListItem;
