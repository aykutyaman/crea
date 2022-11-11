import { getArbitrary } from 'fast-check-io-ts';
import * as fc from 'fast-check';
import * as D from './domain';

describe('domain', () => {
  it('can create valid arbitrary data for domain objects', () => {
    const productsArb = getArbitrary(D.Products);
    const commentsArb = getArbitrary(D.Comments);
    const userArb = getArbitrary(D.User);

    fc.assert(
      fc.property(
        productsArb,
        commentsArb,
        userArb,
        (products, comments, user) => {
          return (
            D.Products.is(products) &&
            D.Comments.is(comments) &&
            D.User.is(user)
          );
        }
      )
    );
  });
});
