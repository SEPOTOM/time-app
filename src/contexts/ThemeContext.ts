import { createContext, useContext } from 'react';

enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

const ThemeContext = createContext(Themes.LIGHT);

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeContext as default, useTheme };
