import * as D from '@crea/domain';
import * as md5 from 'md5';
import * as sample from './sample-data';

let products = sample.products;
let comments = sample.comments;
const users = sample.users;

// NOTE: The code in this module is only for demonstration, so it's ugly and
// error prone.
const db = {
  getProducts: () => {
    return products;
  },
  getProduct: (productId: D.ID) => {
    return products.find((product) => product.id === productId);
  },
  getComments: (productId: D.ID) => {
    return comments.filter((comment) => comment.productId === productId);
  },
  getUser: (username: D.Username, password: D.Password) => {
    return users.find(
      (user) => user.username === username && user.password === md5(password)
    );
  },
  addComment: (comment: D.Comment): D.Comment => {
    const productComments = comments.filter(
      (c) => c.productId === comment.productId
    );

    const sum = productComments
      .map((c) => c.score)
      .reduce((acc, score) => {
        return (acc + score) as D.Score;
      }, comment.score);

    const average = (sum / (productComments.length || 1)) as D.Score;

    comments = [comment, ...comments];

    products = products.map((product) => {
      if (product.id === comment.productId) {
        return {
          ...product,
          score: average,
        };
      }
      return product;
    });
    return comment;
  },
};

export default db;
