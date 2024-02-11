import './index.css';

import { Link } from 'react-router-dom';

import { useTheme } from '../../contexts/ThemeContext';

import { Props } from './types';

const HomeButton = ({ children }: Props) => {
  const theme = useTheme();

  return (
    <Link className={`home-button home-button_${theme}`} to="/">
      {children}
    </Link>
  );
};

export default HomeButton;
