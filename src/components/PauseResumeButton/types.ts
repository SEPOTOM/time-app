import { MouseEvent } from 'react';

export interface Props {
  onClick(e: MouseEvent<HTMLButtonElement>): void;
  isPaused: boolean;
}
