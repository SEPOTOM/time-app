import './index.css';

import { useTheme } from '../../contexts/ThemeContext';

import { Props } from './types';

const RoundButton = ({ children, onClick }: Props) => {
  const theme = useTheme();

  const className = `round-button round-button_${theme}`;

  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default RoundButton;
