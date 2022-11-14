import { ReactElement, useEffect, useState } from 'react';
import * as D from '@crea/domain';
import Layout from '../../components/layout/product/product';
import ProductList from '../../components/product-list';

import { useRouter } from 'next/router';
import getConfig from 'next/config';

const {
  publicRuntimeConfig: { API },
} = getConfig();

export interface ProductsProps {}

export function Products(props: ProductsProps) {
  const [products, setProducts] = useState<D.Products>([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`${API}/products`, {
      credentials: 'include',
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error('invalid-token');
        }
        return res;
      })

      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((e) => {
        if (e.message === 'invalid-token') {
          router.push('/login');
        }
      });
  }, [router]);

  return <ProductList products={products} />;
}

Products.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Products;
