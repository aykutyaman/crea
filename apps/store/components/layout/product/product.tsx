import { ReactNode } from 'react';
import * as styles from './product.css';

/* eslint-disable-next-line */
export interface ProductProps {
  children?: ReactNode;
}

export function Product({ children }: ProductProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>logo</h1>
      <nav className={styles.nav}>nav</nav>
      <main className={styles.main}>Content</main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}

export default Product;
