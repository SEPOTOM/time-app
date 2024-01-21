export interface Props {
  countdownStarted: boolean;
  countdownPaused: boolean;
}

export interface InputProps {
  maxValue: number;
  value: string;
  onChange(newValue: string): void;
}
