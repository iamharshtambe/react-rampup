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
         <button>🔍</button>
      </div>
   );
}

function RestroCardContainer() {
   return (
      <div className="restro-card-container">
         <RestroCard />
         <RestroCard />
         <RestroCard />
         <RestroCard />
         <RestroCard />
         <RestroCard />
         <RestroCard />
         <RestroCard />
         <RestroCard />
      </div>
   );
}

function RestroCard() {
   return (
      <div className="restro-card">
         <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/cc8563a7-cc11-4cb1-ba39-3841690d63cf_1005896.jpg" />
         <p>Madhuram</p>
      </div>
   );
}

function App() {
   return (
      <div className="app">
         <Header />
         <RestroCardContainer />
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
