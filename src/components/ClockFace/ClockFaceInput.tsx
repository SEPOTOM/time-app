import { MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';

import { InputProps } from './types';

const ClockFaceInput = ({ maxValue, value, onChange }: InputProps) => {
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
      onChange(String(maxValue));
      return;
    }

    onChange(currentValue);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length < 2) {
      let formattedValue = e.currentTarget.value;

      while (formattedValue.length < 2) {
        formattedValue = `0${formattedValue}`;
      }

      onChange(formattedValue);
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

export default ClockFaceInput;
