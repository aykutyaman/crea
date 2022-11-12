import { style } from '@vanilla-extract/css';
import { sprinkles } from '@crea/design';

export const input = style({
  border: '2px solid black',
  display: 'flex',
  justifyContent: 'space-between',
});

export const submit = style([
  sprinkles({
    display: {
      default: 'flex',
    },
  }),
  {
    padding: '10px',
  },
]);

export const form = sprinkles({
  display: {
    default: 'flex',
  },
  flexDirection: {
    default: 'column',
    sm: 'row',
  },
});
