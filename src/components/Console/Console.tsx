import './index.css';

interface Props {
  roundsTimes: string[][];
  onClear(): void;
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

const Console = ({ roundsTimes, onClear }: Props) => {
  return (
    <div className="console">
      <div className="console__heading">
        <p className="console__title">Rounds</p>
        <button className="console__button" type="button" onClick={onClear}>
          Clear
        </button>
      </div>
      <div className="console__content">
        {roundsTimes.every((roundsTime) => roundsTime.length === 0) ? (
          <p className="console__placeholder">
            -- Rounds will be shown here --
          </p>
        ) : (
          roundsTimes
            .map((roundsTime, index) => {
              if (roundsTime.length === 0) {
                return null;
              }

              return (
                <>
                  {index !== roundsTimes.length - 1 &&
                    roundsTimes[roundsTimes.length - 1]?.length !== 0 && (
                      <p className="console__placeholder">
                        ----------------------------
                      </p>
                    )}
                  <ul className="console__list" key={index}>
                    {roundsTime
                      .map((roundTime, innerIndex) => {
                        return (
                          <li className="console__item" key={innerIndex}>
                            {formatIndex(innerIndex + 1)} Round -- {roundTime}
                          </li>
                        );
                      })
                      .reverse()}
                  </ul>
                </>
              );
            })
            .reverse()
        )}
      </div>
    </div>
  );
};

export default Console;
