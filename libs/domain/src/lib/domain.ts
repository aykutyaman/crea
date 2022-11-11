import * as t from 'io-ts';

export const ID = t.string;
export type ID = t.TypeOf<typeof ID>;

export const Score = t.union([
  t.literal(1),
  t.literal(2),
  t.literal(3),
  t.literal(4),
  t.literal(5),
]);
export type Score = t.TypeOf<typeof Score>;

export const Date = t.string;
export type Date = t.TypeOf<typeof Date>;

// TODO: distinguish User(logged) and UserLike(not logged)
export const User = t.type({
  username: t.string,
  password: t.string,
});
export type User = t.TypeOf<typeof User>;

export const Product = t.type({
  id: ID,
  name: t.string,
  price: t.number,
  score: Score,
  image: t.string,
  description: t.string,
  arrivalDate: Date,
});
export type Product = t.TypeOf<typeof Product>;

export const Products = t.array(Product);
export type Products = t.TypeOf<typeof Products>;

export const Comment = t.type({
  id: ID,
  productId: ID,
  text: t.string,
  username: t.string,
  userId: ID,
  score: Score,
  date: Date,
});
export type Comment = t.TypeOf<typeof Comment>;

export const Comments = t.array(Comment);
export type Comments = t.TypeOf<typeof Comments>;
