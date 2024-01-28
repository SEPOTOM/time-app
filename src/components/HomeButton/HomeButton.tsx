import './index.css';

import { Link } from 'react-router-dom';

import { Props } from './types';

const HomeButton = ({ children }: Props) => {
  return (
    <Link className="home-button" to="/">
      {children}
    </Link>
  );
};

export default HomeButton;
