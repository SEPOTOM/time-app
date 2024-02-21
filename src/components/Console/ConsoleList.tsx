import { ReactNode } from 'react';

import { formatIndex } from './utils';

import { ListProps } from './types';

const ConsoleList = ({ lapsTimes, lapTimes, index }: ListProps) => {
  const getSeparator = (): ReactNode => {
    return (
      index !== lapsTimes.length - 1 && (
        <p className="console__placeholder">----------------------------</p>
      )
    );
  };

  return (
    <>
      {getSeparator()}
      <ul className="console__list">
        {lapTimes
          .map((lapTime, lapTimeIndex) => {
            return (
              <li className="console__item" key={`list-item-${lapTimeIndex}`}>
                {formatIndex(lapTimeIndex + 1)} Lap -- {lapTime}
              </li>
            );
          })
          .reverse()}
      </ul>
    </>
  );
};

export default ConsoleList;
