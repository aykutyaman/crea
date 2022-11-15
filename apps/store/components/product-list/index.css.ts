import { sprinkles, vars, breakpoint } from '@crea/design';
import { style } from '@vanilla-extract/css';

export const productList = style([
  sprinkles({
    padding: '3x',
    borderWidth: '3x',
    borderColor: 'gray-300',
  }),
  {
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none',
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${
      breakpoint.sm / 2
    }px, 1fr))`,
    gap: vars.space['3x'],
  },
]);
