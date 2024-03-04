import './index.css';

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/solid';

import { HomeButton, ThemeSwitcher } from '../../components';

import ThemeContext, { Themes } from '../../contexts/ThemeContext';

const RootLayout = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    JSON.parse(localStorage.getItem('time-app-is-dark-theme') || 'false')
  );

  const theme = isDarkTheme ? Themes.DARK : Themes.LIGHT;

  const handleThemeSwitch = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem('time-app-is-dark-theme', String(!isDarkTheme));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`root-layout root-layout_${theme}`}>
        <header className="root-layout__header">
          <HomeButton>
            <HomeIcon width={24} />
          </HomeButton>
          <ThemeSwitcher isActive={isDarkTheme} onClick={handleThemeSwitch} />
        </header>
        <Outlet />
        <footer className="root-layout__footer">Time App</footer>
      </div>
    </ThemeContext.Provider>
  );
};

export default RootLayout;
