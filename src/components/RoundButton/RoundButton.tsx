import './index.css';

import { Props } from './types';

const RoundButton = ({ children, onClick }: Props) => {
  return (
    <button className="round-button" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default RoundButton;
