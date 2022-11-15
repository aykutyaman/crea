import { breakpoints, sprinkles } from '@crea/design';
import { style } from '@vanilla-extract/css';

export const container = style([
  sprinkles({
    //    borderWidth: '2x',
  }),
  {
    '@media': {
      [breakpoints.sm['@media']]: {
        display: 'grid',
        gridTemplateColumns: '2fr 3fr',
        gridTemplateRows: '1fr auto',
        gridTemplateAreas: `
"image summary"
"details details"
`,
      },
    },
  },
]);

export const image = style([
  sprinkles({
    borderWidth: '0x',
    borderRadius: '0x',
    borderColor: 'gray-300',
    marginLeft: '2x',
  }),
  {
    gridArea: 'image',
  },
]);

export const summary = style([
  sprinkles({
    // borderWidth: '2x',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    paddingTop: '6x',
    paddingX: '4x',
  }),
  {
    gridArea: 'summary',
  },
]);

export const reviewsContainer = style([
  sprinkles({
    display: 'flex',
  }),
  {},
]);

export const commentsStarsContainer = style([
  sprinkles({
    display: 'flex',
  }),
  {},
]);

export const name = style([
  sprinkles({
    fontSize: '0x',
    fontWeight: 'medium',
    color: 'slate-700',
    // borderWidth: '2x',
  }),
  {},
]);

export const comments = style([
  sprinkles({
    fontSize: '-1x',
    fontWeight: 'extralight',
    color: 'neutral-800',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '1x',
    // borderWidth: '2x',
  }),
  {},
]);

export const price = style([
  sprinkles({
    marginTop: '2x',
    fontSize: '1x',
    color: 'red-500',
  }),
  {},
]);

export const shortDescription = style([
  sprinkles({
    marginTop: '2x',
    fontSize: '-1x',
    color: 'slate-500',
  }),
  {},
]);

export const arrivalDate = style([
  sprinkles({
    // borderWidth: '2x',
    marginTop: '2x',
  }),
  {},
]);

export const arrivalDateTitle = style([
  sprinkles({
    fontWeight: 'bold',
    color: 'slate-600',
  }),
  {},
]);

export const arrivalDateContent = style([
  sprinkles({
    fontFamily: 'mono',
    fontWeight: 'extralight',
    fontSize: '0x',
  }),
  {},
]);

export const details = style({
  gridArea: 'details',
});

export const description = sprinkles({
  color: 'slate-900',
  fontSize: '-1x',
  fontWeight: 'light',
  padding: '2x',
});
