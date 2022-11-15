import { sprinkles, vars } from '@crea/design';
import { style } from '@vanilla-extract/css';

export const list = style([
  sprinkles({
    margin: '2x',
    paddingBottom: '1x',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '4x',
  }),
  {
    borderBottomWidth: vars.borderWidthScale['0x'],
  },
]);

export const item = sprinkles({
  color: 'gray-400',
});

export const itemSelected = sprinkles({
  color: 'gray-900',
  fontWeight: 'medium',
});
