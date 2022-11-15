import { style } from '@vanilla-extract/css';
import { breakpoints, sprinkles, vars } from '@crea/design';

export const container = style([
  sprinkles({
    borderWidth: '0x',
    borderColor: 'gray-300',
    maxWidth: 'md',
    marginX: 'auto',
    marginY: '2x',
  }),
  {
    '@media': {
      [breakpoints.sm['@media']]: {
        display: 'grid',
        gridTemplateColumns: '5fr 1fr',
        gridTemplateRows: 'auto 9fr auto',
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
  sprinkles({}),
  {
    gridArea: 'main',
  },
]);
