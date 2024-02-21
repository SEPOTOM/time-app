export enum Modes {
  HMS = 'h:m:s',
  MSMS = 'm:s:ms',
}

export interface ModeSwitcherProps {
  mode: Modes;
  onModeChange(newMode: string): void;
}
