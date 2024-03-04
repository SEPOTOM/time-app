import { useEffect } from 'react';

import { getNewHours, getNewMinutes, getNewSeconds, isTimeZero } from './utils';

import { TimeState } from '../../types';
import { TimerEffectProps } from './types';

const useTimerEffect = ({
  isStarted,
  isPaused,
  isFinished,
  setTime,
  setIsFinished,
}: TimerEffectProps) => {
  useEffect(() => {
    let intervalId: number | null = null;

    const decreaseTime = () => {
      setTime((t: TimeState) => {
        if (isTimeZero(t)) {
          setIsFinished(true);
          return t;
        }

        return {
          hours: getNewHours(t),
          minutes: getNewMinutes(t),
          seconds: getNewSeconds(t),
        };
      });
    };

    if (isStarted && !isPaused && !isFinished) {
      intervalId = window.setInterval(decreaseTime, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isStarted, isPaused, isFinished, setTime, setIsFinished]);
};

export { useTimerEffect };
