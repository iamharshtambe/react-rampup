import ReactDOM from 'react-dom/client';
import '../index.css';
import Header from './components/Header.js';
import RestroContainer from './components/RestroContainer.js';
import About from './components/About.js';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Error from './components/Error.js';
import RestroMenu from './components/RestroMenu.js';
import { lazy, Suspense } from 'react';
import UserContext from './utils/UserContext.js';

function App() {
  return (
    <UserContext.Provider value={'Harsh Tambe'}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

const Grocery = lazy(() => import('./components/Grocery.js'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <RestroContainer />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/restaurants/:restroId',
        element: <RestroMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
