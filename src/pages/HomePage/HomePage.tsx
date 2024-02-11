import './index.css';

import { Link } from 'react-router-dom';

import { useTheme } from '../../contexts/ThemeContext';

const HomePage = () => {
  const theme = useTheme();

  return (
    <main className={`homepage homepage_${theme}`}>
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
