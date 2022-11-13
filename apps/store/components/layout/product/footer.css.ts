import { style } from '@vanilla-extract/css';
import { sprinkles } from '@crea/design';

export const footer = style([
  sprinkles({
    borderWidth: '0x',
    background: 'gray-100',
    fontWeight: 'light',
    fontSize: '-1x',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '1x',
  }),
  {
    gridArea: 'footer',
  },
]);
