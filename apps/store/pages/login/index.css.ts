import { style, globalStyle } from '@vanilla-extract/css';
import { sprinkles } from '@crea/design';
import { vars } from 'libs/design/src/lib/var.css';

export const field = style({
  border: '2px solid black',
  display: 'flex',
  justifyContent: 'space-between',
});

globalStyle(`${field} > label`, {
  display: 'none',
});

globalStyle(`${field} > input`, {
  width: '100%',
  padding: vars.space['3x'],
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
