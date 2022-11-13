import { ReactNode } from 'react';
import * as styles from './login.css';

/* eslint-disable-next-line */
export interface LoginProps {
  children?: ReactNode;
}

export function Login({ children }: LoginProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Login;
