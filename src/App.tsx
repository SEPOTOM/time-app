import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './layouts/RootLayout/RootLayout';

import { HomePage, NotFoundPage, StopwatchPage, TimerPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/timer',
        element: <TimerPage />,
      },
      {
        path: '/stopwatch',
        element: <StopwatchPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
