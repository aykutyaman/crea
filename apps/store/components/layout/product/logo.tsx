import { ReactNode } from 'react';
import Image from 'next/image';
import * as styles from './logo.css';

export interface LogoProps {
  children?: ReactNode;
}

export const Logo = (_props: LogoProps) => {
  return (
    <h1 className={styles.logo}>
      <Image
        src="https://www.creainc.us/assets/img/logo.svg"
        alt="Crea"
        width={100}
        height={50}
      />
    </h1>
  );
};

export default Logo;
