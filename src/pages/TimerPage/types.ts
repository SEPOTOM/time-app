import { Dispatch, SetStateAction } from 'react';

import { TimeState } from '../../types';

export interface HMSTimeState extends TimeState {
  hours: string;
}

export interface TimerEffectProps {
  isStarted: boolean;
  isPaused: boolean;
  isFinished: boolean;
  setTime: Dispatch<SetStateAction<HMSTimeState>>;
  setIsFinished: Dispatch<SetStateAction<boolean>>;
}
