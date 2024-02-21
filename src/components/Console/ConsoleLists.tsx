import ConsoleList from './ConsoleList';

import { ListsProps } from './types';

const ConsoleLists = ({ lapsTimes }: ListsProps) => {
  return lapsTimes
    .map((lapTimes, index) => {
      if (lapTimes.length === 0) {
        return null;
      }

      return (
        <ConsoleList
          lapsTimes={lapsTimes}
          lapTimes={lapTimes}
          index={index}
          key={`lap-${index}`}
        />
      );
    })
    .reverse();
};

export default ConsoleLists;
