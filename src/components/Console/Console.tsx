import './index.css';

const Console = () => {
  return (
    <div className="console">
      <div className="console__heading">
        <p className="console__title">Rounds</p>
        <button className="console__button" type="button">
          Clear
        </button>
      </div>
      <div className="console__content">
        <p className="console__placeholder">-- Rounds will be shown here --</p>
      </div>
    </div>
  );
};

export default Console;
