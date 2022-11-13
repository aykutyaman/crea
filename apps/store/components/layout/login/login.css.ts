import { sprinkles } from '@crea/design';
import { style } from '@vanilla-extract/css';

export const container = style([
  sprinkles({
    maxWidth: 'sm',
    margin: 'auto',
    padding: {
      default: '1x',
      sm: '3x',
    },
  }),
  {},
]);
