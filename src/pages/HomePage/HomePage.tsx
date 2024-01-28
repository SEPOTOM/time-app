import './index.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage__header">
        <button className="homepage__button" type="button">
          TIMER
        </button>
        <button className="homepage__button" type="button">
          STOPWATCH
        </button>
      </header>
      <footer className="homepage__footer">Time App</footer>
    </div>
  );
};

export default HomePage;
