import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
   const [isLogin, setIslogin] = useState(false);

   function handleClick() {
      const nextState = !isLogin;
      setIslogin(nextState);

      if (nextState) {
         alert('Login Successfully!');
      } else {
         alert('Logout Successfully!');
      }
   }

   return (
      <>
         <div className="nav-bar">
            <h1>Virar Eats</h1>

            <ul>
               <Link className="nav-links" to="/">
                  Home
               </Link>
               <Link className="nav-links" to="about">
                  About Us
               </Link>
               <li>Cart</li>
               <button className="btn" onClick={handleClick}>
                  {isLogin ? 'Logout 🔴' : 'Login 🟢'}
               </button>
            </ul>
         </div>
      </>
   );
}

export default Header;
