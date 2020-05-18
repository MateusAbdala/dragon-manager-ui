//.storybook/addons/theme-selector.js
import React from 'react';
import { addons } from '@storybook/addons';
import { makeDecorator } from '@storybook/addons';
import { ThemeProvider } from 'styled-components';
import Themes from '../../src/themes';
import { GlobalStyle } from '../../src/_util/globalStyle';

export const withThemes = makeDecorator({
  name: 'withThemes',
  parameterName: 'theme',
  skipIfNoParametersOrOptions: false,
  allowDeprecatedUsage: false,
  wrapper: (getStory, context) => {

    addons.getChannel().on('selectTheme', (activeTheme) => {
      context.parameters.options.theme.base = activeTheme;
    });

    return (
      <ThemeProvider theme={Themes[context.parameters.options.theme.base]}>
        <GlobalStyle />
          {getStory(context)}
        </ThemeProvider>
    );
  },
});
