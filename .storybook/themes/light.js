import { create } from '@storybook/theming/create';
import brandImage from '../static/logo.svg';

export default create({
  base: 'light',

  colorPrimary: '#1472E5',
  // colorSecondary: '#166649',

  // // UI
  appBg: '#E2E2F0',
  appContentBg: '#F0F0F7',
  appBorderColor: '#9595A8',
  appBorderRadius: 5,

  // // Typography
  fontBase: 'sans-serif',
  fontCode: 'monospace',

  // // Text colors
  textColor: '#1D1D3F',
  textInverseColor: '#F0F0F7',

  // // Toolbar default and active colors
  barTextColor: '#5E5E6E',
  barSelectedColor: '#1472E5',
  barBg: '#F0F0F7',

  // // Form colors
  inputBg: '#F0F0F7',
  inputBorder: '#C1C1D3',
  inputTextColor: '#1D1D3F',
  inputBorderRadius: 4,

  // Brand
  brandTitle: 'Dragon Manager',
  brandUrl: 'https://dragon-manager.com.br',
  brandImage,
});
