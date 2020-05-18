import { create } from '@storybook/theming/create';
import brandImage from '../static/logo-dark.svg';

export default create({
  base: 'dark',

  colorPrimary: '#3175C8',
  // colorSecondary: '#166649',

  // // UI
  appBg: '#1D1D3F',
  appContentBg: '#2F2F4F',
  appBorderColor: '#F0F0F7',
  appBorderRadius: 5,

  // // Typography
  fontBase: 'sans-serif',
  fontCode: 'monospace',

  // // Text colors
  textColor: '#E2E2F0',
  textInverseColor: '#C1C1D3',

  // // Toolbar default and active colors
  barTextColor: '#5E5E6E',
  barSelectedColor: '#3175C8',
  barBg: '#2F2F4F',

  // // Form colors
  inputBg: '#44445E',
  inputBorder: '#1D1D3F',
  inputTextColor: '#E2E2F0',
  inputBorderRadius: 4,
  // Brand
  brandTitle: 'Dragon Manager',
  brandUrl: 'https://dragon-manager.com.br',
  brandImage,
});
