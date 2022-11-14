import { ReactNode } from 'react';
import { useRouter } from 'next/router';

export interface ProductProps {
  children?: ReactNode;
}

export const Product = (_props: ProductProps) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Welcome to Product!</h1>
    </div>
  );
};

export default Product;
