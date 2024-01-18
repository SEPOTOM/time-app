export interface Props {
  countdownStarted: boolean;
}

export interface InputProps {
  maxValue: number;
  value: string;
  onChange(newValue: string): void;
}

export interface TimeState {
  hours: string;
  minutes: string;
  seconds: string;
}
