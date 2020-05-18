import { addDecorator, addParameters, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withThemes } from './addons/withThemes';
// import { withInfoConfig } from './withInfo';
import themes from './themes';

addParameters({
  options: {
    theme: themes.light,
  },
});

addDecorator(withA11y);
addDecorator(withThemes);
// addDecorator(withInfoConfig);

// automatically import all files ending in *.stories.tsx
configure(require.context('../src/', true, /\.stories\.(ts|tsx)$/), module);
