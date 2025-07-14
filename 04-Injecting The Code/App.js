import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Header() {
   return (
      <>
         <div className="nav-bar">
            <h1>Virar Eats</h1>

            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Cart</li>
            </ul>
         </div>

         <Search />
      </>
   );
}

function Search() {
   return (
      <div className="search">
         <input type="text" placeholder="Search..."></input>
      </div>
   );
}

function App() {
   return (
      <div className="app">
         <Header />
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
