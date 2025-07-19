import ReactDOM from 'react-dom/client';
import '../index.css';
import Header from './components/Header.js';
import RestroContainer from './components/RestroContainer.js';
import About from './components/About.js';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Error from './components/Error.js';

function App() {
   return (
      <div className="app">
         <Header />
         <Outlet />
      </div>
   );
}

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
            path: 'about',
            element: <About />,
         },
      ],
      errorElement: <Error />,
   },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
