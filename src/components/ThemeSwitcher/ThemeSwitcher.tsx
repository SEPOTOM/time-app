import './index.css';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

import { Props } from './types';

const ThemeSwitcher = ({ isActive, onClick }: Props) => {
  const dotClassName = `theme-switcher__dot${
    isActive ? ' theme-switcher__dot_active' : ''
  }`;

  return (
    <button className="theme-switcher" type="button" onClick={onClick}>
      <SunIcon className="them-switcher__icon" width={20} height={20} />
      <MoonIcon className="them-switcher__icon" width={20} height={20} />
      <div className={dotClassName} />
    </button>
  );
};

export default ThemeSwitcher;
