import { create } from '@storybook/theming'
import theme from '../src/styles/theme'

export default create({
  base: 'dark',

  colorPrimary: theme.colors.primary,
  colorSecondary: theme.colors.secondary,

  // UI
  appBg: theme.colors.mainBg,
  appContentBg: theme.colors.mainBg,
  appBorderColor: theme.colors.lightGray,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: theme.colors.white,
  textInverseColor: theme.colors.primary,

  // Toolbar default and active colors
  barTextColor: theme.colors.white,
  barSelectedColor: theme.colors.primary,
  barBg: theme.colors.mainBg,

  // Form colors
  inputBg: theme.colors.lightGray,
  inputBorder: theme.colors.darkGray,
  inputTextColor: theme.colors.black,

  brandTitle: 'Won games storybook',
  brandUrl: 'https://example.com',
  brandImage: '/img/logo.svg'
})
