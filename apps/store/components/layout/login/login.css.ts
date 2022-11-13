import { sprinkles } from '@crea/design';

export const main = sprinkles({
  width: 'full',
  height: 'full',
  display: 'flex',
  justifyContent: 'center',
  alignItems: {
    default: 'flex-start',
    sm: 'center',
  },
});

export const container = sprinkles({
  maxWidth: 'sm',
  paddingX: {
    default: '4x',
    sm: '3x',
  },
  paddingY: {
    default: 'none',
    sm: '6x',
  },
  borderWidth: {
    default: 'none',
    sm: '0x',
  },
  width: 'full',
  borderColor: 'gray-300',
});
