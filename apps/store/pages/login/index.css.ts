import { style, globalStyle } from '@vanilla-extract/css';
import { sprinkles, vars } from '@crea/design';

globalStyle(`form `, {
  width: '100%',
});

export const container = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 'full',
});

export const headingText = sprinkles({
  fontSize: '2x',
  fontWeight: 'light',
});

export const headingSubtext = sprinkles({
  fontSize: '0x',
  fontWeight: 'light',
  marginBottom: '6x',
});

export const formContainer = sprinkles({
  display: {
    default: 'flex',
  },
  justifyContent: 'center',
  alignItems: 'center',
  gap: {
    default: '1x',
    sm: '0x',
  },

  flexDirection: {
    default: 'column',
    sm: 'row',
  },
});

export const field = sprinkles({
  borderRadius: '0x',
  width: 'full',
  borderWidth: '1x',
  borderColor: 'gray-300',
});

// TODO: select properly like this: ${field} > label
globalStyle(`label`, {
  display: 'none',
});

export const submit = style([
  sprinkles({
    display: {
      default: 'flex',
    },
    justifyContent: 'center',
    alignItems: 'center',

    fontSize: '0x',
    background: 'blue-500',
    color: 'gray-100',
    maxWidth: '1/4',
    alignSelf: 'flex-end',
    borderRadius: '0x',
    boxShadow: 'medium',
    padding: '3x',
  }),
  {},
]);
