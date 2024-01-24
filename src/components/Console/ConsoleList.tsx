import { ReactNode } from 'react';

import { formatIndex } from './utils';

import { ListProps } from './types';

const ConsoleList = ({ lapsTimes, lapsTime, index }: ListProps) => {
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
      <ul className="console__list" key={index}>
        {lapsTime
          .map((lapTime, index) => {
            return (
              <li className="console__item" key={`list-item-${index}`}>
                {formatIndex(index + 1)} Round -- {lapTime}
              </li>
            );
          })
          .reverse()}
      </ul>
    </>
  );
};

export default ConsoleList;
