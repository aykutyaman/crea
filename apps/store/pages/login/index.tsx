import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { useState } from 'react';

const {
  publicRuntimeConfig: { API },
} = getConfig();

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const request = await fetch(`${API}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (request.status === 200) {
      router.push('/products');
    }
  };
  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form>
      <input
        name="username"
        onChange={handleUsername}
        placeholder="Username"
        className=""
      />{' '}
      Username
      <input
        name="password"
        onChange={handlePassword}
        placeholder="Password"
        className=""
      />{' '}
      Password
      <br />
      <button onClick={handleLogin} className="">
        Login
      </button>
    </form>
  );
}

export default Login;
