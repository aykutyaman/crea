import { sprinkles } from '@crea/design';
import { style } from '@vanilla-extract/css';

export const item = style([
  sprinkles({
    marginY: '6x',
  }),
  {},
]);

export const nameStar = sprinkles({
  // borderWidth: '0x',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingX: '3x',
});

export const date = sprinkles({
  // borderWidth: '0x',
  paddingX: '3x',
  fontFamily: 'mono',
  fontWeight: 'extralight',
  fontSize: '-1x',
});

export const text = sprinkles({
  marginTop: '3x',
  paddingX: '3x',
  fontSize: '-1x',
  color: 'slate-500',
});
