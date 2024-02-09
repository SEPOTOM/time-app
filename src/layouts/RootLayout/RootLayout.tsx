import './index.css';

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/solid';

import { HomeButton, ThemeSwitcher } from '../../components';

import ThemeContext, { Themes } from '../../contexts/ThemeContext';

const RootLayout = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = isDarkTheme ? Themes.DARK : Themes.LIGHT;

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`root-layout root-layout_${theme}`}>
        <header className="root-layout__header">
          <HomeButton>
            <HomeIcon width={24} />
          </HomeButton>
          <ThemeSwitcher isActive={isDarkTheme} onClick={handleThemeToggle} />
        </header>
        <Outlet />
        <footer className="root-layout__footer">Time App</footer>
      </div>
    </ThemeContext.Provider>
  );
};

export default RootLayout;
