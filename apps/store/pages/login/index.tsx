import getConfig from 'next/config';
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
    <>
      <AutoForm
        schema={bridge}
        onSubmit={(user) => {
          const decoded = D.User.decode(user);
          if (decoded._tag === 'Right') {
            handleLogin(decoded.right);
          }
        }}
      >
        <div className={styles.form}>
          <AutoField name="username" className={styles.input} />
          <AutoField name="password" className={styles.input} />
          <ErrorsField />
          <SubmitField className={styles.submit} />
        </div>
      </AutoForm>
    </>
  );
}

export default Login;
