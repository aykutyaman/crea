import { createGlobalTheme } from '@vanilla-extract/css';
import { modularScale } from 'polished';
import { colors } from './colors';

const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

const spaceScale = createScale(1.4, 4);
export const fontSizeScale = createScale(1.3, 16);
export const lineHeightScale = createScale(1.25, 24);
const borderRadiusScale = createScale(1.25, 4);
const borderSizeScale = createScale(1.4, 1);

export const vars = createGlobalTheme(':root', {
  space: {
    auto: 'auto',
    none: '0',
    '0x': spaceScale(0),
    '1x': spaceScale(1),
    '2x': spaceScale(2),
    '3x': spaceScale(3),
    '4x': spaceScale(4),
    '5x': spaceScale(5),
    '6x': spaceScale(6),
    '7x': spaceScale(7),
    '8x': spaceScale(8),
    '16x': spaceScale(16),
    '32x': spaceScale(32),
    '64x': spaceScale(64),
  },
  color: colors,
  borderRadius: {
    '0x': borderRadiusScale(0),
    '1x': borderRadiusScale(1),
    '2x': borderRadiusScale(2),
    '3x': borderRadiusScale(3),
    '4x': borderRadiusScale(4),
    '5x': borderRadiusScale(5),
    full: '99999px',
  },
  borderWidthScale: {
    none: '0',
    '0x': borderSizeScale(0),
    '1x': borderSizeScale(1),
    '2x': borderSizeScale(2),
    '3x': borderSizeScale(3),
    '4x': borderSizeScale(4),
    '5x': borderSizeScale(5),
    full: '99999px',
  },
  fontFamily: {
    mono: `"iAWriter Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    sans: `"Inter var", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  },
  fontSize: {
    '0x': fontSizeScale(0),
    '1x': fontSizeScale(1),
    '2x': fontSizeScale(2),
    '3x': fontSizeScale(3),
    '4x': fontSizeScale(4),
    '5x': fontSizeScale(5),
  },
  lineHeight: {
    '0x': lineHeightScale(0),
    '1x': lineHeightScale(1),
    '2x': lineHeightScale(2),
    '3x': lineHeightScale(3),
    '4x': lineHeightScale(4),
    '5x': lineHeightScale(5),
  },
  fontWeights: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  opacity: {
    '0': '0',
    '50': '0.5',
    '100': '1',
  },
  sizes: {
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    full: '100%',
  },
  shadows: {
    low: '0.3px 0.5px 0.7px hsl( 0deg 0% 63% / 0.34), 0.4px 0.8px 1px -1.2px hsl( 0deg 0% 63% / 0.34), 1px 2px 2.5px -2.5px hsl( 0deg 0% 63% / 0.34)',
    medium:
      '0.3px 0.5px 0.7px hsl( 0deg 0% 63% / 0.36), 0.8px 1.6px 2px -0.8px hsl( 0deg 0% 63% / 0.36), 2.1px 4.1px 5.2px -1.7px hsl( 0deg 0% 63% / 0.36), 5px 10px 12.6px -2.5px hsl( 0deg 0% 63% / 0.36)',
    high: '0.3px 0.5px 0.7px hsl( 0deg 0% 63% / 0.34), 1.5px 2.9px 3.7px -0.4px hsl( 0deg 0% 63% / 0.34), 2.7px 5.4px 6.8px -0.7px hsl( 0deg 0% 63% / 0.34), 4.5px 8.9px 11.2px -1.1px hsl( 0deg 0% 63% / 0.34), 7.1px 14.3px 18px -1.4px hsl( 0deg 0% 63% / 0.34), 11.2px 22.3px 28.1px -1.8px hsl( 0deg 0% 63% / 0.34), 17px 33.9px 42.7px -2.1px hsl( 0deg 0% 63% / 0.34), 25px 50px 62.9px -2.5px hsl( 0deg 0% 63% / 0.34)',
  },
});
