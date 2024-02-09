import './index.css';

import { useTheme } from '../../contexts/ThemeContext';

import { Props } from './types';

const RoundButton = ({ children, onClick }: Props) => {
  const theme = useTheme();

  return (
    <button
      className={`round-button round-button_${theme}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundButton;
