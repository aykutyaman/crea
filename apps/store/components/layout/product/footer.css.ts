import { style } from '@vanilla-extract/css';
import { sprinkles } from '@crea/design';

export const footer = style([
  sprinkles({
    paddingTop: '3x',
    marginTop: '2x',
    borderRadius: '0x',
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
