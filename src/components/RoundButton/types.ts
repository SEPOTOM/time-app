import { ReactNode, MouseEvent } from 'react';

export interface Props {
  children: ReactNode;
  onClick(e: MouseEvent<HTMLButtonElement>): void;
}
