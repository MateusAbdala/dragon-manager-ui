//.storybook/addons/theme-selector.js
import React, { useState } from 'react';
import { addons, types } from '@storybook/addons';
import { IconButton, TooltipLinkList, WithTooltip } from '@storybook/components';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import styled from 'styled-components';
import themes from '../themes';

const ThemeIcon = styled.span`
  height: 1rem;
  width: 1rem;
  display: block;
  background: red;
`;

addons.register('my/theme-selector', (api) => {
  addons.add('theme-selector/tool', {
    title: 'theme-selector',
    type: types.TOOL,
    render: () => <ThemeSelector api={api} />,
  });
});

const ThemeSelector = ({ api }) => {
  const localTheme = window.localStorage.getItem('theme');
  const [activeTheme, setTheme] = useState(localTheme || 'light');
  const [expanded, setExpanded] = useState(false);

  setTimeout(()=>{
    setTheme(activeTheme);
      api.setOptions({
        activeTheme,
        theme: themes[activeTheme] || themes.light,
      });
    addons.getChannel().emit('selectTheme', activeTheme);
    addons.getChannel().emit(FORCE_RE_RENDER);
  }, 3)

  const themeList = ['light', 'dark'].map(i => ({
    id: i,
    title: i,
    onClick: () => {
      setTheme(i);
      api.setOptions({
        i,
        theme: themes[i] || themes.light,
      });
      window.localStorage.setItem('theme', i);
      addons.getChannel().emit('selectTheme', i);
      addons.getChannel().emit(FORCE_RE_RENDER);
    },
      right: <ThemeIcon />,
  }));

  return (
    <WithTooltip
      placement='top'
      trigger='click'
      tooltipShown={expanded}
      onVisibilityChange={s => setExpanded(s)}
      tooltip={<TooltipLinkList links={themeList} />}
      closeOnClick
    >
      <IconButton key='theme-selector'>{activeTheme} mode</IconButton>
    </WithTooltip>
  );
};
