import getConfig from 'next/config';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';
import {
  AutoField,
  AutoForm,
  SubmitField,
  ErrorsField,
} from 'uniforms-unstyled';
import { createValidator } from '../helpers';
import * as D from '@crea/domain';
import * as styles from './index.css';
import { ReactElement } from 'react';
import Layout from '../../components/layout/login/login';

const {
  publicRuntimeConfig: { API },
} = getConfig();

const schemaValidator = createValidator(D.User);
const schema = {
  title: 'Loaded',
  type: 'object',
  properties: {
    username: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['username', 'password'],
};
const bridge = new JSONSchemaBridge(schema, schemaValidator);

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(_props: LoginProps) {
  const router = useRouter();

  const handleLogin = async (user: D.User) => {
    const request = await fetch(`${API}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(user),
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

  return (
    <div className={styles.container}>
      <Image
        src="https://www.creainc.us/assets/img/logo.svg"
        alt="Crea"
        width={150}
        height={75}
      />
      <h1 className={styles.headingText}>Sign in</h1>
      <p className={styles.headingSubtext}>to continue to product list</p>
      <AutoForm
        schema={bridge}
        onSubmit={(user) => {
          const decoded = D.User.decode(user);
          if (decoded._tag === 'Right') {
            handleLogin(decoded.right);
          }
        }}
      >
        <div className={styles.formContainer}>
          <AutoField
            name="username"
            className={styles.field}
            placeholder="Username"
          />
          <AutoField
            name="password"
            className={styles.field}
            placeholder="Password"
          />
          <SubmitField className={styles.submit} value="Login" />
        </div>
        <ErrorsField />
      </AutoForm>
    </div>
  );
}

Login.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Login;
