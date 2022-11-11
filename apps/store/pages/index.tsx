import { useEffect, useState } from 'react';
import * as D from '@crea/domain';
import styles from './index.module.css';

export function Index() {
  const [products, setProducts] = useState<D.Products>([]);

  useEffect(() => {
    fetch(`http://localhost:3333/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className={styles.page}>
      <ul className="">
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
