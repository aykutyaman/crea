import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface ProductProps {
  children?: ReactNode;
}

export function Product({ children }: ProductProps) {
  return <div className="PRODUCTLAYOUT">{children}</div>;
}

export default Product;
