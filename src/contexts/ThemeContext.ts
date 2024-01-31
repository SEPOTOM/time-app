import { createContext } from 'react';

enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

const ThemeContext = createContext(Themes.LIGHT);

export default ThemeContext;
