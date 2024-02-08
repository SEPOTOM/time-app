import './index.css';

import { Link } from 'react-router-dom';

import { useTheme } from '../../contexts/ThemeContext';

import { Props } from './types';

const HomeButton = ({ children }: Props) => {
  const theme = useTheme();

  const className = `home-button home-button_${theme}`;

  return (
    <Link className={className} to="/">
      {children}
    </Link>
  );
};

export default HomeButton;
