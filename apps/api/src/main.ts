import * as express from 'express';
import * as path from 'path';
import * as D from '@crea/domain';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as jose from 'jose';
import { serialize } from 'cookie';
import * as cookieParser from 'cookie-parser';

import db from './db';
import { authenticateToken } from './authenticateToken';

const TOKEN_SECRET = process.env.TOKEN_SECRET;

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

const whiteList = [process.env.FRONT_END_APP];

app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      console.log({ origin });

      if (origin && whiteList.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error('not allowd by CORS'));
    },
  })
);

app.post('/api/auth/login', async (req, res) => {
  const { username } = req.body;
  if (username === 'user') {
    const token = await new jose.SignJWT({
      id: 'myUserId',
      username: 'user',
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('30d')
      .sign(new TextEncoder().encode(TOKEN_SECRET));

    const serialized = serialize('CreaJWT', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });

    res.setHeader('Set-Cookie', serialized);

    res.status(200).json({ message: 'login-success' });
  } else {
    return res.status(401).json({
      message: 'Invalid Credentials',
    });
  }
});

app.get('/api/auth/logout', (req, res) => {
  const { cookies } = req;

  const jwt = cookies.CreaJWT;

  if (!jwt) {
    return res.json({
      message: 'already-logged-out',
    });
  }

  const serialized = serialize('CreaJWT', '', {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
    maxAge: -1,
    path: '/',
  });

  res.setHeader('Set-Cookie', serialized);

  res.status(200).json({ message: 'logut-success' });
});

app.get('/api/products', authenticateToken, (req, res) => {
  const { cookies } = req;
  const jwt = cookies.CreaJWT;
  if (!jwt) {
    return res.status(401).json({
      products: [],
      message: 'invalid-token',
    });
  }
  res.send({ products: db.getProducts() });
});

app.get('/api/products/:productId', authenticateToken, (req, res) => {
  const { productId } = req.params;
  res.send({ products: db.getProduct(productId as D.ID) });
});

app.get('/api/comments/:productId', authenticateToken, (req, res) => {
  const { productId } = req.params;
  res.send({ comments: db.getComments(productId as D.ID) });
});

app.post('/api/comment', authenticateToken, (req, res) => {
  const comment = req.body;
  res.send({ comment: db.addComment(comment as D.Comment) });
});

const port = process.env.API_PORT;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
