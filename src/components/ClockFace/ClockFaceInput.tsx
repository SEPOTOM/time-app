import { MouseEvent, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';

import { useTheme } from '../../contexts/ThemeContext';

import { formatTimeValue } from '../../utils/formatTimeValue';

import { InputProps } from './types';

const ClockFaceInput = ({ maxValue, value, onChange }: InputProps) => {
  const theme = useTheme();

  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const NUMBERS_REGEXP = /^[0-9]*$/;

    if (!NUMBERS_REGEXP.test(e.key) && e.key !== 'Backspace') {
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
      const formattedValue = formatTimeValue(e.currentTarget.value);
      onChange(formattedValue);
    }
  };

  const className = `clock-face__input clock-face__input_${theme}`;

  return (
    <input
      className={className}
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
