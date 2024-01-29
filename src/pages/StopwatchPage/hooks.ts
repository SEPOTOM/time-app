import { Dispatch, SetStateAction, useEffect } from 'react';

import { getNewHours, getNewMinutes, getNewSeconds } from './utils';

import { TimeState } from '../../types';

const useStopwatchEffect = (
  isStarted: boolean,
  isPaused: boolean,
  setTime: Dispatch<SetStateAction<TimeState>>
) => {
  useEffect(() => {
    let intervalId: number | null = null;

    const incrementTime = () => {
      setTime((t: TimeState) => {
        return {
          hours: getNewHours(t),
          minutes: getNewMinutes(t),
          seconds: getNewSeconds(t),
        };
      });
    };

    if (isStarted && !isPaused) {
      intervalId = window.setInterval(incrementTime, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isStarted, isPaused, setTime]);
};

export { useStopwatchEffect };
