import './index.css';

interface Props {
  roundsTime: string[];
}

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
                    {index + 1} Round -- {roundTime}
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
