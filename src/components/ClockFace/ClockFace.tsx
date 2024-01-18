import './index.css';

import {
  MouseEvent,
  KeyboardEvent,
  ChangeEvent,
  FocusEvent,
  useState,
  useEffect,
} from 'react';

import { Props, InputProps, TimeState } from './types';

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

const ClockFace = ({ countdownStarted }: Props) => {
  const [time, setTime] = useState<TimeState>({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    let timeoutId = 0;

    const getNewSeconds = ({ seconds, minutes, hours }: TimeState): string => {
      const newValue = Number(seconds) - 1;

      if (newValue < 0 && hours === '00' && minutes === '00') {
        return '00';
      } else if (newValue < 0) {
        return '59';
      }

      let formattedValue = String(newValue);

      while (formattedValue.length < 2) {
        formattedValue = `0${formattedValue}`;
      }

      return formattedValue;
    };

    const getNewMinutes = ({ seconds, minutes, hours }: TimeState): string => {
      if (seconds !== '00') {
        return minutes;
      }

      const newValue = Number(minutes) - 1;

      if (newValue < 0 && hours === '00') {
        return '00';
      } else if (newValue < 0) {
        return '59';
      }

      let formattedValue = String(newValue);

      while (formattedValue.length < 2) {
        formattedValue = `0${formattedValue}`;
      }

      return formattedValue;
    };

    const getNewHours = ({ seconds, minutes, hours }: TimeState): string => {
      if (seconds !== '00' || minutes !== '00') {
        return hours;
      }

      const newValue = Number(hours) - 1;

      if (newValue < 0) {
        return '00';
      }

      let formattedValue = String(newValue);

      while (formattedValue.length < 2) {
        formattedValue = `0${formattedValue}`;
      }

      return formattedValue;
    };

    const decreaseTime = () => {
      setTime((t) => {
        if (t.hours === '00' && t.minutes === '00' && t.seconds === '00') {
          return t;
        }

        const newSeconds = getNewSeconds(t);
        const newMinutes = getNewMinutes(t);
        const newHours = getNewHours(t);

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });

      timeoutId = setTimeout(decreaseTime, 1000);
    };

    if (countdownStarted) {
      timeoutId = setTimeout(decreaseTime, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [countdownStarted]);

  const handleHoursChange = (newValue: string) => {
    setTime((t) => ({ ...t, hours: newValue }));
  };

  const handleMinutesChange = (newValue: string) => {
    setTime((t) => ({ ...t, minutes: newValue }));
  };

  const handleSecondsChange = (newValue: string) => {
    setTime((t) => ({ ...t, seconds: newValue }));
  };

  return (
    <div className="clock-face">
      <ClockFaceInput
        maxValue={99}
        value={time.hours}
        onChange={handleHoursChange}
      />
      <span className="clock-face__separator">:</span>
      <ClockFaceInput
        maxValue={59}
        value={time.minutes}
        onChange={handleMinutesChange}
      />
      <span className="clock-face__separator">:</span>
      <ClockFaceInput
        maxValue={59}
        value={time.seconds}
        onChange={handleSecondsChange}
      />
    </div>
  );
};

export default ClockFace;
