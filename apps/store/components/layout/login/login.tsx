import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface LoginProps {
  children?: ReactNode;
}

export function Login({ children }: LoginProps) {
  return <div className="LOGINLAYOUT">{children}</div>;
}

export default Login;
