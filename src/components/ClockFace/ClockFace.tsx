import './index.css';

import { useState, useEffect } from 'react';

import ClockFaceInput from './ClockFaceInput';

import { formatTimeValue } from './utils';

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
      const rawNewSeconds = Number(seconds) - 1;

      if (rawNewSeconds < 0 && hours === '00' && minutes === '00') {
        return '00';
      } else if (rawNewSeconds < 0) {
        return '59';
      }

      return formatTimeValue(rawNewSeconds);
    };

    const getNewMinutes = ({ seconds, minutes, hours }: TimeState): string => {
      if (seconds !== '00') {
        return minutes;
      }

      const rawNewMinutes = Number(minutes) - 1;

      if (rawNewMinutes < 0 && hours === '00') {
        return '00';
      } else if (rawNewMinutes < 0) {
        return '59';
      }

      return formatTimeValue(rawNewMinutes);
    };

    const getNewHours = ({ seconds, minutes, hours }: TimeState): string => {
      if (seconds !== '00' || minutes !== '00') {
        return hours;
      }

      const rawNewHours = Number(hours) - 1;

      if (rawNewHours < 0) {
        return '00';
      }

      return formatTimeValue(rawNewHours);
    };

    const decreaseTime = () => {
      setTime((t: TimeState) => {
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

  const handleHoursChange = (newHours: string) => {
    setTime((t) => ({ ...t, hours: newHours }));
  };

  const handleMinutesChange = (newMinutes: string) => {
    setTime((t) => ({ ...t, minutes: newMinutes }));
  };

  const handleSecondsChange = (newSeconds: string) => {
    setTime((t) => ({ ...t, seconds: newSeconds }));
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
