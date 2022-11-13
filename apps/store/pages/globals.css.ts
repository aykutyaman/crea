import { globalStyle } from '@vanilla-extract/css';

import { vars } from '@crea/design';

globalStyle('*, ::before, ::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  borderWidth: 0,
  borderStyle: 'solid',
});

globalStyle('html', {
  fontSize: vars.fontSize['0x'],
  color: vars.color['slate-800'],
  textRendering: 'optimizeLegibility',
  fontFamily: vars.fontFamily.sans,
});

globalStyle('body', {
  margin: 0,
  // background: vars.color['gray-300'],
});

globalStyle('a', {
  textDecoration: 'none',
});

globalStyle('html, body, #__next', {
  width: '100%',
  height: '100%',
});
