import { style } from '@vanilla-extract/css';
import { breakpoints, sprinkles } from '@crea/design';

export const container = style([
  sprinkles({
    borderWidth: '0x',
    maxWidth: 'sm',
    marginX: 'auto',
  }),
  {
    '@media': {
      [breakpoints.sm['@media']]: {
        display: 'grid',
        gridTemplateColumns: '5fr 1fr',
        gridTemplateRows: '1fr 12fr 1fr',
        gridTemplateAreas: `
"logo nav"
"main main"
"footer footer"
`,
      },
    },
  },
]);

export const main = style([
  sprinkles({
    borderWidth: '0x',
  }),
  {
    gridArea: 'main',
  },
]);
