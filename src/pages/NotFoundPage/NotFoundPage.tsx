import './index.css';

import { Link } from 'react-router-dom';

import { useTheme } from '../../contexts/ThemeContext';

const NotFoundPage = () => {
  const theme = useTheme();

  return (
    <main className={`not-found not-found_${theme}`}>
      <p className="not-found__text">
        <span className="not-found__code">404</span> Not Found
      </p>
      <Link className="not-found__link" to="/" replace>
        To the main page
      </Link>
    </main>
  );
};

export default NotFoundPage;
