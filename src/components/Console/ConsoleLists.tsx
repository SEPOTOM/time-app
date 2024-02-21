import ConsoleList from './ConsoleList';

import { ListsProps } from './types';

const ConsoleLists = ({ lapsTimes }: ListsProps) => {
  return lapsTimes
    .map((lapsTime, index) => {
      if (lapsTime.length === 0) {
        return null;
      }

      return (
        <ConsoleList
          lapsTimes={lapsTimes}
          lapTimes={lapsTime}
          index={index}
          key={`lap-${index}`}
        />
      );
    })
    .reverse();
};

export default ConsoleLists;
