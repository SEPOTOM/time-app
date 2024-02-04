import './index.css';

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main className="homepage">
      <Link className="homepage__button" to="/timer">
        TIMER
      </Link>
      <Link className="homepage__button" to="/stopwatch">
        STOPWATCH
      </Link>
    </main>
  );
};

export default HomePage;
