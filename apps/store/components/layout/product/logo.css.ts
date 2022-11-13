import { style } from '@vanilla-extract/css';
import { sprinkles } from '@crea/design';

export const logo = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    // paddingY: '3x',
    paddingLeft: '3x',
  }),
  {
    gridArea: 'logo',
  },
]);
