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

  return (
    <ThemeContext.Provider value={theme}>
      <header className="header">
        <HomeButton>
          <HomeIcon width={24} />
        </HomeButton>
        <ThemeSwitcher isActive={isDarkTheme} onClick={handleThemeToggle} />
      </header>
      <Outlet />
      <footer className="footer">Time App</footer>
    </ThemeContext.Provider>
  );
};

export default RootLayout;
