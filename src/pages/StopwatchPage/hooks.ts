import { Dispatch, SetStateAction, useEffect } from 'react';

import {
  getNewHours,
  getNewMilliseconds,
  getNewMinutes,
  getNewSeconds,
} from './utils';

import { TimeState } from '../../types';
import { Modes } from './types';

const useStopwatchEffect = (
  isStarted: boolean,
  isPaused: boolean,
  mode: Modes,
  setTime: Dispatch<SetStateAction<TimeState>>
) => {
  useEffect(() => {
    const delayMs = mode === Modes.HMS ? 1000 : 10;

    let intervalId: number | null = null;

    const incrementTime = () => {
      setTime((t: TimeState) => {
        const newT: TimeState = {
          minutes: getNewMinutes(t),
          seconds: getNewSeconds(t),
        };

        if ('milliseconds' in t) {
          newT.milliseconds = getNewMilliseconds(t);
        }

        if ('hours' in t) {
          newT.hours = getNewHours(t);
        }

        return newT;
      });
    };

    if (isStarted && !isPaused) {
      intervalId = window.setInterval(incrementTime, delayMs);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isStarted, isPaused, mode, setTime]);
};

export { useStopwatchEffect };
