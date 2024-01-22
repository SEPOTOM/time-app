import { MouseEvent } from 'react';

export interface PauseResumeButtonProps {
  onClick(e: MouseEvent<HTMLButtonElement>): void;
  countdownPaused: boolean;
}
