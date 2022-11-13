import { ReactNode } from 'react';
import * as styles from './footer.css';

export interface FooterProps {
  children?: ReactNode;
}

export const Footer = (_props: FooterProps) => {
  return (
    <footer className={styles.footer}>
      Copyright 2022 ©Ninico. All rights reserved. Powered by Acme.
    </footer>
  );
};

export default Footer;
