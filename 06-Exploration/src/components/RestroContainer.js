import RestroCard from './RestroCard.js';
import { useEffect, useState } from 'react';

function RestroContainer() {
   const [listOfRestros, setListOfRestros] = useState([]);

   async function fetchData() {
      const data = await fetch(
         'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4563596&lng=72.79246119999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );

      const json = await data.json();

      setListOfRestros(
         json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
   }

   useEffect(() => {
      fetchData();
   }, []);

   function handleClick() {
      const filteredListOfRestros = listOfRestros.filter(
         (restro) => restro.info.avgRating > 4.2
      );

      setListOfRestros(filteredListOfRestros);
   }

   return (
      <>
         <div className="filter">
            <button onClick={handleClick}>Top Rated Restaurants</button>
         </div>
         <div className="restro-card-container">
            {listOfRestros.map((restro) => (
               <RestroCard restroObj={restro} key={restro.info.id} />
            ))}
         </div>
      </>
   );
}

export default RestroContainer;
