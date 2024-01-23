import './index.css';

interface Props {
  roundsTime: string[];
}

const formatIndex = (index: number): string => {
  switch (index) {
    case 1: {
      return '1st';
    }
    case 2: {
      return '2nd';
    }
    case 3: {
      return '3rd';
    }
    default: {
      return `${index}th`;
    }
  }
};

const Console = ({ roundsTime }: Props) => {
  return (
    <div className="console">
      <div className="console__heading">
        <p className="console__title">Rounds</p>
        <button className="console__button" type="button">
          Clear
        </button>
      </div>
      <div className="console__content">
        {roundsTime.length > 0 ? (
          <ul className="console__list">
            {roundsTime
              .map((roundTime, index) => {
                return (
                  <li className="console__item" key={index}>
                    {formatIndex(index + 1)} Round -- {roundTime}
                  </li>
                );
              })
              .reverse()}
          </ul>
        ) : (
          <p className="console__placeholder">
            -- Rounds will be shown here --
          </p>
        )}
      </div>
    </div>
  );
};

export default Console;
