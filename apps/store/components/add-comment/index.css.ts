import { sprinkles } from '@crea/design';
import { style } from '@vanilla-extract/css';

export const container = style([
  sprinkles({
    width: 'full',
    paddingX: '3x',

    flexWrap: 'wrap',
  }),
  {},
]);

export const input = style([
  sprinkles({
    borderWidth: '0x',
    width: 'full',
    flexBasis: '3/4',
    padding: '3x',
    borderRadius: '0x',
    borderColor: 'gray-300',
  }),
  {},
]);

export const button = style([
  sprinkles({
    fontSize: '0x',
    background: 'blue-500',
    color: 'gray-100',
    borderRadius: '0x',
    boxShadow: 'medium',
    padding: '3x',
    marginY: '3x',
  }),
  {},
]);
