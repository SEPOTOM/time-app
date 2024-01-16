import './index.css';

import {
  MouseEvent,
  KeyboardEvent,
  ChangeEvent,
  FocusEvent,
  useState,
} from 'react';

import { InputProps } from './types';

const ClockFaceInput = ({ maxValue }: InputProps) => {
  const [value, setValue] = useState('00');

  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const REGEXP = /^[0-9]*$/;

    if (!REGEXP.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value;

    if (currentValue.length > 2) {
      return;
    }

    if (Number(currentValue) > maxValue) {
      setValue(String(maxValue));
      return;
    }

    setValue(currentValue);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length < 2) {
      let formattedValue = e.currentTarget.value;

      while (formattedValue.length < 2) {
        formattedValue = `0${formattedValue}`;
      }

      setValue(formattedValue);
    }
  };

  return (
    <input
      className="clock-face__input"
      type="number"
      inputMode="numeric"
      value={value}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

const ClockFace = () => {
  return (
    <div className="clock-face">
      <ClockFaceInput maxValue={99} />
      <span className="clock-face__separator">:</span>
      <ClockFaceInput maxValue={59} />
      <span className="clock-face__separator">:</span>
      <ClockFaceInput maxValue={59} />
    </div>
  );
};

export default ClockFace;
