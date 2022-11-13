import { ReactNode } from 'react';
import * as styles from './product.css';
import Nav from './nav';
import Logo from './logo';
import Footer from './footer';

/* eslint-disable-next-line */
export interface ProductProps {
  children?: ReactNode;
}

export function Product({ children }: ProductProps) {
  return (
    <div className={styles.container}>
      <Logo />
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Product;
