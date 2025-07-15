import Search from './Search.js';

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

export default Header;
