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
        gridTemplateRows: '1fr 5fr 1fr',
        gridTemplateAreas: `
"logo nav"
"main main"
"footer footer"
`,
      },
    },
  },
]);

export const logo = style([
  sprinkles({
    borderWidth: '0x',
  }),
  {
    gridArea: 'logo',
  },
]);

export const nav = style([
  sprinkles({
    borderWidth: '0x',
  }),
  {
    gridArea: 'nav',
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

export const footer = style([
  sprinkles({
    borderWidth: '0x',
  }),
  {
    gridArea: 'footer',
  },
]);
