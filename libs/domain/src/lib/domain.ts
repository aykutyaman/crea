import * as t from 'io-ts';
import { withMessage } from 'io-ts-types';

export const ID = t.string;
export type ID = t.TypeOf<typeof ID>;

export const Score = t.union([
  t.literal(0),
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
const Username = withMessage(
  t.string,
  (value) => `Username should be a string: ${value}`
);

const Password = withMessage(
  t.string,
  (value) => `Password should be a string: ${value}`
);

export const UserLike = t.type({
  username: Username,
  password: Password,
});
export type UserLike = t.TypeOf<typeof UserLike>;

export const User = t.intersection([
  UserLike,
  t.type({
    fullname: t.string,
  }),
]);

export type User = t.TypeOf<typeof User>;

export const Users = t.array(User);
export type Users = t.TypeOf<typeof Users>;

export const Product = t.type({
  id: ID,
  name: t.string,
  price: t.number,
  score: Score,
  image: t.string,
  description: t.string,
  shortDescription: t.string,
  arrivalDate: Date,
});
export type Product = t.TypeOf<typeof Product>;

export const Products = t.array(Product);
export type Products = t.TypeOf<typeof Products>;

export const Comment = t.type({
  id: ID,
  productId: ID,
  text: t.string,
  fullname: t.string,
  userId: ID,
  score: Score,
  date: Date,
});
export type Comment = t.TypeOf<typeof Comment>;

export const Comments = t.array(Comment);
export type Comments = t.TypeOf<typeof Comments>;

export const CommentLike = t.type({
  text: withMessage(t.string, () => `Comment text should not be empty`),
  score: withMessage(
    Score,
    (value) => `Score should be a number from 0-5 got: ${value}`
  ),
});
export type CommentLike = t.TypeOf<typeof CommentLike>;
