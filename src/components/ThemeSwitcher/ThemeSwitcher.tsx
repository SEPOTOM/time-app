import './index.css';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

import { useTheme } from '../../contexts/ThemeContext';

import { Props } from './types';

const ThemeSwitcher = ({ isActive, onClick }: Props) => {
  const theme = useTheme();

  const dotClassNameModifier = isActive ? ' theme-switcher__dot_active' : '';

  return (
    <button
      className={`theme-switcher theme-switcher_${theme}`}
      type="button"
      onClick={onClick}
    >
      <SunIcon className="them-switcher__icon" width={20} />
      <MoonIcon className="them-switcher__icon" width={20} />
      <div className={`theme-switcher__dot${dotClassNameModifier}`} />
    </button>
  );
};

export default ThemeSwitcher;
