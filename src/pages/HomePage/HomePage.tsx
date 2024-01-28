import { Link } from 'react-router-dom';

import './index.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage__header">
        <Link className="homepage__button" to="/timer">
          TIMER
        </Link>
        <Link className="homepage__button" to="/stopwatch">
          STOPWATCH
        </Link>
      </header>
      <footer className="homepage__footer">Time App</footer>
    </div>
  );
};

export default HomePage;
