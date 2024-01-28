import './index.css';

import { Link } from 'react-router-dom';

import { Footer } from '../../components';

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
      <Footer />
    </div>
  );
};

export default HomePage;
