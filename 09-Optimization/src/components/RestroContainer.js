import RestroCard from './RestroCard.js';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer.js';
import { Link } from 'react-router-dom';

function RestroContainer() {
   const [listOfRestros, setListOfRestros] = useState([]);
   const [filteredListOfRestros, setFilteredListOfRestros] = useState([]);
   const [searchText, setSearchText] = useState('');

   async function fetchData() {
      const data = await fetch(
         'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4563596&lng=72.79246119999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );

      const json = await data.json();

      setListOfRestros(
         json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );

      setFilteredListOfRestros(
         json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
   }

   useEffect(() => {
      fetchData();
   }, []);

   function handleTopRatedRestros() {
      const filteredListOfRestros = listOfRestros.filter(
         (restro) => restro.info.avgRating > 4.2
      );

      setFilteredListOfRestros(filteredListOfRestros);
   }

   function handleSearch() {
      const filteredListOfRestros = listOfRestros.filter((restro) =>
         restro.info.name.toLowerCase().includes(searchText.toLowerCase())
      );

      setFilteredListOfRestros(filteredListOfRestros);
   }

   return listOfRestros.length === 0 ? (
      <Shimmer />
   ) : (
      <>
         <div className="search">
            <input
               type="text"
               placeholder="Search..."
               value={searchText}
               onChange={(e) => setSearchText(e.target.value)}
            ></input>
            <button onClick={handleSearch}>🔍</button>
         </div>
         <div className="filter">
            <button onClick={handleTopRatedRestros}>
               Top Rated Restaurants
            </button>
         </div>
         <div className="restro-card-container">
            {filteredListOfRestros.map((restro) => (
               <Link key={restro.info.id} to={`/restaurants/${restro.info.id}`}>
                  <RestroCard restroObj={restro} />
               </Link>
            ))}
         </div>
      </>
   );
}

export default RestroContainer;
