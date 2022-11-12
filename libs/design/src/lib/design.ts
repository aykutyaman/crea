import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { vars } from './var.css';

const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const;

const breakpoint = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;
export type Breakpoint = keyof typeof breakpoint;
export const breakpointNames = Object.keys(breakpoint) as Breakpoint[];

type Media = {
  '@media': string;
};

type T = Record<Breakpoint, Media>;

export const breakpoints = breakpointNames.reduce<T>((acc, br) => {
  return {
    ...acc,
    [br]: { '@media': `screen and (min-width: ${breakpoint[br]}px)` },
  };
}, {} as T);

const responsiveProperties = defineProperties({
  conditions: {
    default: {},
    ...breakpoints,

    // mobile: {},
    // tablet: { '@media': 'screen and (min-width: 768px)' },
    // desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'default',
  properties: {
    flexBasis: {
      ...vars.space,
      ...vars.sizes,
    },

    // gridTemplateColumns: ["1fr", "repeat(12, minmax(0, 1fr))"],
    // gridColumnStart: [1, 2, 3, 4],
    // gridColumnEnd: [1, 2, 3, 4],

    // gridTemplateColumns: {
    //   3: 'repeat(3, 1fr)',
    //   1: 'repeat(1, 1fr)',
    // },

    // gridTemplateColumns: [`1fr 1fr 1fr`, `1fr 1fr`, `2fr 1fr`, `1fr`],

    fontSize: vars.fontSize,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    // etc.
    position: ['absolute', 'relative', 'fixed'],
    fontWeight: vars.fontWeights,
    top: vars.space,
    bottom: vars.space,
    left: vars.space,
    right: vars.space,
    zIndex: [-1, 0, 1],
    display: [
      'block',
      'inline',
      'inline-block',
      'flex',
      'inline-flex',
      'grid',
      'inline-grid',
      'flow-root',
      'contents',
    ],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    flexGrow: [0, 1],
    flexShrink: [0, 1],
    flexWrap: ['wrap', 'nowrap', 'wrap-reverse'],
    justifyContent: [
      ...flexAlignment,
      'space-around',
      'space-evenly',
      'space-between',
    ],
    order: [-3, -2, -1, 0, 1, 2, 3],
    justifySelf: flexAlignment,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    marginTop: vars.space,
    maxHeight: { ...vars.sizes, 0: '0px', ...vars.space },
    minHeight: { ...vars.sizes, 0: '0px' },

    alignItems: [...flexAlignment, 'baseline'],
    alignSelf: [...flexAlignment, 'baseline'],
    // don't include "auto" for gap
    gap: vars.space,
    height: { ...vars.sizes, ...vars.space },
    width: vars.sizes,
    borderWidth: vars.borderWidthScale,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: vars.color,
    background: vars.color,
    // etc.
  },
});

const unconditionalProperties = defineProperties({
  properties: {
    fontFamily: vars.fontFamily,
    objectFit: ['contain', 'cover'],
    opacity: vars.opacity,
    textTransform: ['capitalize', 'lowercase', 'uppercase'],
    visibility: ['hidden', 'visible'],
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  unconditionalProperties
);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
