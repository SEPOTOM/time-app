import { Dispatch, SetStateAction } from 'react';

import { TimeState } from '../../types';

export interface TimerEffectProps {
  isStarted: boolean;
  isPaused: boolean;
  isFinished: boolean;
  setTime: Dispatch<SetStateAction<TimeState>>;
  setIsFinished: Dispatch<SetStateAction<boolean>>;
}
