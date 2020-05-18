import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './_util/globalStyle';
import { Provider } from 'mobx-react';
import { rootStore } from './stores';

import Themes from './themes';
import Pages from './pages';
import Toggle from './components/toggle';

function App() {
  const [darkMode, setDarkMode] = useState(prefersDark);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? Themes.dark : Themes.light}>
      <Provider {...{ rootStore }}>
        <Toggle checked={darkMode} onChange={toggleDarkMode} />
        <Pages />
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

const prefersDark = () => {
  const localTheme = window.localStorage.getItem('theme');

  return window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localTheme ? true : localTheme === 'dark';
}

export default App;
