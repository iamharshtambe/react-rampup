import React from 'react';
import ReactDOM from 'react-dom/client';

function Title() {
   return <h1>This is Title</h1>;
}

function Header() {
   return (
      <div>
         <Title />
         <h1>This is Header</h1>
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Header />);
