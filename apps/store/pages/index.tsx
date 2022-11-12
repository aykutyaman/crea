import { useEffect, useState } from 'react';
import * as D from '@crea/domain';
import styles from './index.module.css';
import { useRouter } from 'next/router';

export function Index() {
  const [products, setProducts] = useState<D.Products>([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:3333/api/products`, {
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

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const request = await fetch(`http://localhost:3333/api/auth/logout`, {
      credentials: 'include',
    });

    if (request.status === 200) {
      router.push('/login');
    }
  };

  return (
    <div className={styles.page}>
      <button onClick={handleLogout} className="">
        Logout
      </button>

      <ul className="">
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
