import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as D from '@crea/domain';
import getConfig from 'next/config';
import ProductDetail from '../../components/product-detail';
import Layout from '../../components/layout/product/product';

export interface ProductProps {
  children?: ReactNode;
}

const {
  publicRuntimeConfig: { API },
} = getConfig();

export const Product = (_props: ProductProps) => {
  const [product, setProduct] = useState<D.Product>(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch(`${API}/products/${id}`, {
      credentials: 'include',
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error('invalid-token');
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => setProduct(data.product))
      .catch((e) => {
        if (e.message === 'invalid-token') {
          router.push('login');
        }
      });
  }, [router, id]);

  return (
    <>{product ? <ProductDetail product={product} /> : <div>loading</div>}</>
  );
};

Product.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Product;
