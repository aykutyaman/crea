import { sprinkles, vars, breakpoint } from '@crea/design';
import { style } from '@vanilla-extract/css';

export const productList = style([
  sprinkles({
    padding: '3x',
  }),
  {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${
      breakpoint.sm / 2
    }px, 1fr))`,
    gap: vars.space['3x'],
  },
]);
