import { SetStateAction } from 'react';

import { TimeState } from '../../types';

export interface Props {
  time: TimeState;
  onTimeChange(newTime: SetStateAction<TimeState>): void;
}

export interface InputProps {
  maxValue: number;
  value: string;
  onChange(newValue: string): void;
}
