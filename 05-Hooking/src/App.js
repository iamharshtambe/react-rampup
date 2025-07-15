import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Header from './components/Header.js';
import RestroContainer from './components/RestroContainer.js';

function App() {
   return (
      <div className="app">
         <Header />
         <RestroContainer />
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
