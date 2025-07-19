import { useState } from 'react';

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
               <li>Home</li>
               <li>About Us</li>
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
