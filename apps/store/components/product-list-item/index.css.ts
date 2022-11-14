import { sprinkles } from '@crea/design';
import { style } from '@vanilla-extract/css';

export const item = style([
  sprinkles({
    borderWidth: '1x',
    borderColor: 'gray-300',
    borderRadius: '0x',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    paddingX: '3x',
  }),
  {},
]);

export const image = style([
  sprinkles({
    alignSelf: 'center',
  }),
  {},
]);

export const name = style([
  sprinkles({
    fontSize: '-1x',
    fontWeight: 'light',
  }),
  {},
]);

export const score = style([
  sprinkles({
    fontSize: '0x',
  }),
  {},
]);
