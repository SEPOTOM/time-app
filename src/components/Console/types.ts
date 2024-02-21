export interface Props {
  lapsTimes: string[][];
  onClear(): void;
}

export interface ListsProps {
  lapsTimes: string[][];
}

export interface ListProps {
  lapsTimes: string[][];
  index: number;
  lapTimes: string[];
}
