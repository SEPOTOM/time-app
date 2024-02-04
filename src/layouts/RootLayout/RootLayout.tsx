import { HomeIcon } from '@heroicons/react/24/solid';
import { HomeButton } from '../../components';
import './index.css';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <header className="header">
        <HomeButton>
          <HomeIcon width={24} />
        </HomeButton>
      </header>
      <Outlet />
      <footer className="footer">Time App</footer>
    </>
  );
};

export default RootLayout;
