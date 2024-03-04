import './index.css';

import { useRouteError } from 'react-router-dom';

import { useTheme } from '../../contexts/ThemeContext';

const ErrorPage = () => {
  const error = useRouteError();
  const theme = useTheme();

  return (
    <main className={`error-page error-page_${theme}`}>
      <h2 className="error-page__title">
        An unexpected <span className="error-page__highlight">error</span>{' '}
        occurred
      </h2>
      <p className="error-page__details">
        <span className="error-page__subdued">Details:</span>{' '}
        {error instanceof Error ? error.message : String(error)}
      </p>
    </main>
  );
};

export default ErrorPage;
