import * as express from 'express';
import * as path from 'path';
import * as D from '@crea/domain';

import db from './db';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(express.json());

app.post('/api/login', (_req, res) => {
  res.send({});
});

app.post('/api/logout', (_req, res) => {
  res.send({});
});

app.get('/api/products', (_req, res) => {
  res.send({ products: db.getProducts() });
});

app.get('/api/products/:productId', (req, res) => {
  const { productId } = req.params;
  res.send({ products: db.getProduct(productId as D.ID) });
});

app.get('/api/comments/:productId', (req, res) => {
  const { productId } = req.params;
  res.send({ comments: db.getComments(productId as D.ID) });
});

app.post('/api/comment', (req, res) => {
  const comment = req.body;
  res.send({ comment: db.addComment(comment as D.Comment) });
});

const port = process.env.port || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
