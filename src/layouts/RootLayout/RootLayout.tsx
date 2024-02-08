import { HomeIcon } from '@heroicons/react/24/solid';
import { HomeButton, ThemeSwitcher } from '../../components';
import './index.css';
import { Outlet } from 'react-router-dom';
import ThemeContext, { Themes } from '../../contexts/ThemeContext';
import { useState } from 'react';

const RootLayout = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = isDarkTheme ? Themes.DARK : Themes.LIGHT;

  const className = `root-layout root-layout_${theme}`;

  return (
    <ThemeContext.Provider value={theme}>
      <div className={className}>
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
