import './index.css';

import ConsoleLists from './ConsoleLists';

import { hasLaps } from './utils';

import { Props } from './types';

const Console = ({ lapsTimes, onClear }: Props) => {
  return (
    <div className="console">
      <div className="console__heading">
        <p className="console__title">Laps</p>
        <button className="console__button" type="button" onClick={onClear}>
          Clear
        </button>
      </div>
      <div className="console__content">
        {hasLaps(lapsTimes) ? (
          <ConsoleLists lapsTimes={lapsTimes} />
        ) : (
          <p className="console__placeholder">-- Laps will be shown here --</p>
        )}
      </div>
    </div>
  );
};

export default Console;
