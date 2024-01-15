import './index.css';

import { Props } from './types';

const RoundButton = ({ children }: Props) => {
  return (
    <button className="round-button" type="button">
      {children}
    </button>
  );
};

export default RoundButton;
