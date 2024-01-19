import './index.css';

import { useState, useEffect } from 'react';

import ClockFaceInput from './ClockFaceInput';

import { Props, TimeState } from './types';

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

      timeoutId = window.setTimeout(decreaseTime, 1000);
    };

    if (countdownStarted) {
      timeoutId = window.setTimeout(decreaseTime, 1000);
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
