import './index.css';

import { MouseEvent } from 'react';

const ClockFaceInput = () => {
  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };

  return (
    <input
      className="clock-face__input"
      type="number"
      inputMode="numeric"
      defaultValue="00"
      onClick={handleClick}
    />
  );
};

const ClockFace = () => {
  return (
    <div className="clock-face">
      <ClockFaceInput />
      <span className="clock-face__separator">:</span>
      <ClockFaceInput />
      <span className="clock-face__separator">:</span>
      <ClockFaceInput />
    </div>
  );
};

export default ClockFace;
