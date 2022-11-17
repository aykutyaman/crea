import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import * as styles from './nav.css';

export interface NavProps {
  children?: ReactNode;
}

const {
  publicRuntimeConfig: { API },
} = getConfig();

export const Nav = (_props: NavProps) => {
  const router = useRouter();

  const handleLogout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const request = await fetch(`${API}/auth/logout`, {
      credentials: 'include',
    });

    if (request.status === 200) {
      router.push('/login');
    }
  };

  return (
    <nav className={styles.nav}>
      <a href="#" onClick={handleLogout} className={styles.logoutLink}>
        Logout
      </a>
    </nav>
  );
};

export default Nav;
