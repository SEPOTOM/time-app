import './index.css';

import { Props } from './types';

const RoundedButton = ({ children }: Props) => {
  return (
    <button className="rounded-button" type="button">
      {children}
    </button>
  );
};

export default RoundedButton;
