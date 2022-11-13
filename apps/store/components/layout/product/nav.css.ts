import { style } from '@vanilla-extract/css';
import { sprinkles } from '@crea/design';

export const logoutLink = style([
  sprinkles({
    color: 'blue-600',
  }),
  {},
]);

export const nav = style([
  sprinkles({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '3x',
  }),
  {
    gridArea: 'nav',
  },
]);
